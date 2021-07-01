import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PlaceOrder from './Basket/PlaceOrder';

const App = () => {
    return (
        <Container maxWidth="md">
            <Router>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/checkout" element={ <PlaceOrder /> } />
                </Routes>
            </Router>
        </Container>
    )
}

export default App;