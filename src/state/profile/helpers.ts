import { Profile } from 'state/types'
import { GetUserProfileResponse } from 'utils/types'
import { getProfileContract } from 'utils/contractHelpers'

export interface GetProfileResponse {
  hasRegistered: boolean
  profile?: Profile
}

const transformProfileResponse = (profileResponse: GetUserProfileResponse): Partial<Profile> => {
  const { 0: userId, 1: numberPoints, 4: tokenId, 5: isActive } = profileResponse

  return {
    userId: userId.toNumber(),
    points: numberPoints.toNumber(),
    tokenId: tokenId.toNumber(),
    isActive,
  }
}

const profileContract = getProfileContract()
const profileApi = process.env.REACT_APP_API_PROFILE

export const getUsername = async (address: string): Promise<string> => {
  try {
    const response = await fetch(`${profileApi}/api/users/${address.toLowerCase()}`)

    if (!response.ok) {
      return ''
    }

    const { username = '' } = await response.json()

    return username
  } catch (error) {
    return ''
  }
}

export const getProfile = async (address: string): Promise<GetProfileResponse> => {
  try {
    const hasRegistered = await profileContract.hasRegistered(address)

    if (!hasRegistered) {
      return { hasRegistered, profile: null }
    }

    const profileResponse = await profileContract.getUserProfile(address)
    const { userId, points, isActive } = transformProfileResponse(profileResponse)
    const username = await getUsername(address)

    const profile = {
      userId,
      points,
      username,
      isActive,
    } as Profile

    return { hasRegistered, profile }
  } catch (e) {
    console.error(e)
    return null
  }
}
