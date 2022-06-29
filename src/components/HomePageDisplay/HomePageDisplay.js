import React from 'react';
import { GameItem } from '../../components/GameItem';
import Pagination from '../../components/Pagination/Pagination';
import './HomePageDisplay.css';


const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 321,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 451,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 3021,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 1021,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 2300,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 1254,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: '/game-covers/Dota_2.png',
        title: 'Dota 2',
        genres: ['MOBA', 'РПГ/Экшен', 'Фэнтези'],
        video: 'https://www.youtube.com/embed/cSFPIwMEq4',
        price: 4651,
        id: 7,
        description: 'Dota 2 — многопользовательская командная компьютерная игра в жанре MOBA, разработанная и изданная корпорацией Valve. Игра является продолжением DotA — пользовательской карты-модификации для игры Warcraft III: Reign of Chaos и дополнения к ней Warcraft III: The Frozen Throne.'
    },
    {
        image: '/game-covers/valorant.jpg',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Шутер'],
        price: 1432,
        id: 8,
        description: 'Valorant — многопользовательская компьютерная игра, разработанная и издаваемая компанией Riot Games. Valorant является первой игрой Riot Games в жанре шутер от первого лица.'
    },
    {
        image: '/game-covers/warcraft.jpg',
        title: 'WarCraft',
        genres: ['MOBA', 'РПГ/Экшен', 'Фэнтези'],
        price: 123,
        id: 9,
        description: 'World of Warcraft — массовая многопользовательская ролевая онлайн-игра, разработанная и издаваемая компанией Blizzard Entertainment. Действие World of Warcraft происходит в фэнтезийной вселенной Warcraft.'
    },
]

export const HomePageDisplay = ({ searchValue }) => {
    const games = GAMES.filter(game => {
        if (game.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true
        }
        return false
    }).map(game => <GameItem game={game} key={game.id} />)
    return (
        <div className="home-page__display">
            {games}
            <Pagination />
        </div>
    )
}