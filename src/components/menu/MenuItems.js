import out from '../../assets/icons/out.png'
import home from '../../assets/icons/home.png'
import takequiz from '../../assets/icons/takequiz.png'
import createquiz from '../../assets/icons/createquiz.png'
export const items = [
    {itemText: "HOME", itemLink: "/", itemIcon:  <img className='icons-side' src={home}
     alt="" />},
    {itemText: "TAKE QUIZ", itemLink: "/take-quiz", itemIcon:  <img className='icons-side' src={takequiz}
    alt="" /> },
    {itemText: "CREATE QUIZ", itemLink: "/add-quiz-admin", itemIcon:  <img className='icons-side' src={createquiz}
    alt="" />},
    {itemText: "SIGN IN", itemLink: "/sign", itemIcon:  <img className='icons-side' src={out}
    alt="" />},
    
]