import React from 'react';
import AlbumList from '../components/AlbumList/index';


function AlbumFeature(props) {

    const albumList = [
        {
            id: 1,
            name: 'Front End happy Hour',
            thumbnailURL: 'https://i.scdn.co/image/78b2b0450d0191fad5ec3dcf5ed546a7a6c7a858',
        },
        {
            id: 2,
            name: 'lofi hip hop music',
            thumbnailURL: 'https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd',
        },
        {
            id: 3,
            name: 'Drum TAO',
            thumbnailURL: 'https://i.scdn.co/image/ab67616d00001e0237fb4334f5ecfb6a050b05bb',
        }
    ];

    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;