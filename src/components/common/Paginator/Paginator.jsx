import React, {useState, useEffect } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({totalAmount, pageSize, onPageNumberClick, currentPage, chunkSize = 30}) => {
    const pagesCount = Math.ceil(totalAmount / pageSize);
    useEffect(() => setCurrentChunk(Math.ceil(currentPage/chunkSize)), [currentPage]);

    const pages = [];
    for (let i = 1; i<= pagesCount; i++) {
        pages.push(i);
    }

    const chunksCount = Math.ceil(pages / chunkSize);
    const [currentChunk, setCurrentChunk] = useState(1);

    const leftChunkLimit = (currentChunk - 1) * chunkSize + 1;
    const rightChunkLimit = leftChunkLimit + (chunkSize - 1);


    return (
        <div>
            { currentChunk != 1 && <button onClick={ () => {setCurrentChunk(currentChunk - 1)}}>{'<'}</button>}

            {pages
            .filter(p => p >= leftChunkLimit && p <= rightChunkLimit)
            .map(p =>
                <span key={p} className={p != currentPage ? styles.pageNumber : styles.pageNumberSelected} onClick={ (e) => {onPageNumberClick(p)} }> {p}</span>
            )}

            { currentChunk != chunksCount && <button onClick={() => {setCurrentChunk(currentChunk + 1)}}>{'>'}</button>}
        </div>
    )
}

export default Paginator