import { userDataInfoProps } from '../../utils/types/interface_and_types'


export const UserDataInfo = ({dataValue,dataTitle,dataIdValue, dataIdTitle}:userDataInfoProps) => {
    return (
        <div className='details'>
            <span data-testid={dataIdTitle} className='data-value'>{dataTitle}</span>
            <span data-testid={dataIdValue} className='data-title'>{dataValue}</span>
        </div>
    )
}
