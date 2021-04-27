import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/index';
import './styles.scss';


AlbumList.propTypes = {
    AlbumList: PropTypes.any,
};

AlbumList.defaultProps = {
    AlbumList: [],
};

function AlbumList({albumList}) {
    return (
        <div>
            <h2>Hôm nay bạn nghe gì</h2>
            <ul className = "album-list">
               {albumList.map(album => (
                    <li key={album.id}>
                        <Album album={album} />
                    </li>
               ))}
            </ul>
        </div>
    );
}

export default AlbumList;