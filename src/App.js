import './App.css';
import hayat from './images/hotel'
import mariott from './images/mariott'
import hilton from './images/hotels'
import mercury from './images/hotels'
import motel from './images/hotels'

function App() {
    const appName = "Booking App"
    const user = {

        name: "Anna",
        lastName: "Karelina"

    }
    const hotels = [
        {
            id: '1',
            name: 'Mariott',
            description: '3 star hotel',
            price: 55,
            image: hayat
        },
        {
            id: '2',
            name: 'Mercury',
            description: '3 star hotel',
            price: 89,
            image: mercury
        },
        {
            id: '3',
            name: 'Hilton',
            description: '4 star hotel',
            price: 60,
            image: hilton
        },
        {
            id: '4',
            name: 'Hayat',
            description: '5 star hotel',
            price: 34,
            image: hayat
        },
        {
            id: '5',
            name: 'Motel',
            description: '2 star hotel',
            price: 100,
            image: motel
        }
    ]

    const menuGridStyle = {
        display: 'grid',
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
    }
    const hotelGridStyle = {
        display: 'grid',
        gridTemplateColumns: "1fr 1fr 1fr"
    }

    const menu = ["Home", "Hotels", "Cars", "Flights", "Activities"]

    const userFullName = (user) => {
        return `${user.name} ${user.lastName}`
    }

    return (
        <div className="App">
            <h1>{appName}</h1>
            <h2>Welcome, {user.name}</h2>
            <h2>Hello, {userFullName(user)}</h2>
            <hr/>
            <div style={menuGridStyle}>
                {menu.map((el) => <span>{el}</span>)}
            </div>

            <hr/>
            <div style={hotelGridStyle}>
                {hotels.map(hotel =>
                    <div>
                        <img src={hotels.image} alt={hotel.name}/>
                        <h3>{hotel.name}</h3>
                        <p>{hotel.description}</p>
                        <p>{hotel.price}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
