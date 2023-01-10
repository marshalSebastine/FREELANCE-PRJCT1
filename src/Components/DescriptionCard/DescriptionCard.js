import './DescriptionCard.styles.css';
import {ReactComponent as BottomLeaf} from '../../assets/bottomleaf.svg';
import { ReactComponent as TopLeaf} from '../../assets/topleaf.svg'
const DescriptionCard = ({GoShop,title,description1,description2}) => {
    return(
    <div className="DescriptionCard">
        <TopLeaf className='TopLeaf'/>
        <GoShop className='CardImage'/>
        <h2 className='DescriptionCardTitle'>{title}</h2>
        <div className='DescriptionCardText'>
             <p>{description1}</p>
             <p>{description2}</p>
        </div>
        <BottomLeaf className='BottomLeaf'/>
    </div>)
}

export default DescriptionCard