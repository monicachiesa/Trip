import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';  //dispara uma ação do redux
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md'
import './style.css';
import { addReserve } from '../../store/modules/reserve/actions';

export default function Home() {
    const [trips, setTrips] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips');
            setTrips(response.data);
            console.log(response.data);
        }

        loadApi()
    }, []);

    function handleAdd(trip) {
        dispatch(addReserve(trip));
    }

    return (
        <div>
            <div className="box">
                {trips.map(trip => (
                    <li key={trip.id}>
                        <img src={trip.image} alt="trip" />
                        <strong>{trip.title}</strong>
                        <span>{trip.status ? 'Disponível' : 'Indisponível'}</span>

                        <button type="button" onClick={() => handleAdd(trip)}>
                            <div><MdFlightTakeoff size={16} color="#FFF" /></div>
                            <span>Solicitar reserva</span>
                        </button>
                    </li>
                ))}
            </div>
        </div>
    );
}