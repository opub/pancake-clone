import { Box, Flex, Skeleton, Text, useMatchBreakpoints, useTooltip } from '@pancakeswap/uikit'
import Balance from 'components/Balance'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { DeserializedPool } from 'state/types'
import styled from 'styled-components'
import BaseCell, { CellContent } from './BaseCell'

interface AvgBalanceCellProps {
  pool: DeserializedPool
  account: string
  userDataLoaded: boolean
}

const StyledCell = styled(BaseCell)`
  flex: 4.5;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 120px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex: 2 0 100px;
  }
`

const HelpIconWrapper = styled.div`
  align-self: center;
`

const AvgBalanceCell: React.FC<AvgBalanceCellProps> = ({ pool, account, userDataLoaded }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  // TODO: refactor this is use everywhere
  const stakedDollarValue = 0

  const labelText = t('Average') + t('Pool Balance')

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t(
      'Max CAKE entry for both IFO sale is capped by average pool balance in this pool. This is calculated by the average block balance in the IFO pool in the past blocks prior to cut-off block.',
    ),
    { placement: 'bottom' },
  )

  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {labelText}
        </Text>
        {!userDataLoaded && account ? (
          <Skeleton width="80px" height="16px" />
        ) : (
          <>
            {tooltipVisible && tooltip}
            <Flex>
              <Box mr="8px" height="32px">
                <Balance
                  mt="4px"
                  bold={!isMobile}
                  fontSize={isMobile ? '14px' : '16px'}
                  color="textDisabled"
                  decimals={1}
                  value={0}
                />
                  <Text mt="4px" fontSize="12px" color="textDisabled">
                    0 USD
                  </Text>
              </Box>
            </Flex>
          </>
        )}
      </CellContent>
    </StyledCell>
  )
}

export default AvgBalanceCell
