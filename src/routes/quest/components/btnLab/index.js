import React from 'react'
import {
  Button,
} from 'antd'
import les from './index.less'

const BtnLab = ({
  dispatch,
}) => {
  // 方法定义
  const onPlanClick = () => {
    dispatch({ type: 'quest/showModalPlan', show: true })
  }

  return (
    <div className={les.btnArea}>
      <Button
        type="primary"
        onClick={onPlanClick}
      >{__('logistic.supportPlan.entryButton')}</Button>
      <div className={les.blank} />
    </div>
  )
}

export default BtnLab
