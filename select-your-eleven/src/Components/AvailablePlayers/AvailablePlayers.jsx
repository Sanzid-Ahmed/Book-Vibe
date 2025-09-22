import React, { use } from 'react';

const AvailablePlayers = ({fetchPlayers}) => {

    const playersData = use(fetchPlayers);
    console.log(playersData);

    return (
        <div>
            ap
        </div>
    );
};

export default AvailablePlayers;