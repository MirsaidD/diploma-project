// import { useState } from "react";
// import classes from './Categories.module.css'

// function Categories() {
//     const [activeIndex, setActiveIndex] = useState(3)

//     const categories = [
//         'Все',
//         'Экшен',
//         'Шутер',
//         'Война',
//         'Глубокий сюжет',
//         'Протагонистка',
//         'Тактика',
//         'Паркур',
//         'РПГ',
//         'MOBA',
//     ]

//     const onClickCategory = (index) => {
//         setActiveIndex(index);
//     }

//     return (
//         <ul className={classes.categories}>
//      <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? classes.active : ''}>Все</li>
//             <li onClick={() => onClickCategory(1)} className={activeIndex === 0 ? classes.active : ''}>Экшен</li>
//             <li onClick={() => onClickCategory(2)} className={activeIndex === 1 ? classes.active : ''}>Шутер</li>
//             <li onClick={() => onClickCategory(3)} className={activeIndex === 2 ? classes.active : ''}>Война</li>
//             <li onClick={() => onClickCategory(4)} className={activeIndex === 3 ? classes.active : ''} >Глубокий сюжет</li>
//             <li onClick={() => onClickCategory(5)} className={activeIndex === 4 ? classes.active : ''}>Протагонистка</li>
//             <li onClick={() => onClickCategory(6)} className={activeIndex === 5 ? classes.active : ''}>Тактика</li>
//             <li onClick={() => onClickCategory(7)} className={activeIndex === 6 ? classes.active : ''}>Паркур</li>
//             <li onClick={() => onClickCategory(8)} className={activeIndex === 7 ? classes.active : ''}>РПГ</li>
//             <li onClick={() => onClickCategory(9)} className={activeIndex === 8 ? classes.active : ''}>MOBA</li> 
//             {
//                 categories.map((value, index) => (
//                     <li onClick={() => onClickCategory(index)} className={activeIndex === index ? classes.active : ','}>
//                         {value + index} </li>

//                 ))}
//         </ul >
//     );
// }

// export default Categories;