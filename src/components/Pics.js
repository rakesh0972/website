import React from 'react';
import './ImageSlider.css';

const Pics = () => {
    const track = document.getElementById('image-track');

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

    const handleOnUp = () => {
        track.dataset.mouseDownAt = '0';
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
        if (track.dataset.mouseDownAt === '0') return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained =
                parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(
                Math.min(nextPercentageUnconstrained, 0),
                -100
            );

        track.dataset.percentage = nextPercentage;

        track.animate(
            {
                transform: `translate(${nextPercentage}%, -50%)`,
            },
            { duration: 1200, fill: 'forwards' }
        );

        for (const image of track.getElementsByClassName('image')) {
            image.animate(
                {
                    objectPosition: `${100 + nextPercentage}% center`,
                },
                { duration: 1200, fill: 'forwards' }
            );
        }
    };

    /* -- Had to add extra lines for touch events -- */

    window.onmousedown = (e) => handleOnDown(e);

    window.ontouchstart = (e) => handleOnDown(e.touches[0]);

    window.onmouseup = (e) => handleOnUp(e);

    window.ontouchend = (e) => handleOnUp(e.touches[0]);

    window.onmousemove = (e) => handleOnMove(e);

    window.ontouchmove = (e) => handleOnMove(e.touches[0]);

    return (
        <div>
            {/* <iframe src="ami.html" className="bg-blackbg"></iframe> */}
            <main className="body h-screen w-full bg-blackbg">
                <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                    <img className="image" src="./1.png" draggable="false" />
                    <img className="image" src="./2.png" draggable="false" />
                    <img className="image" src="./3.png" draggable="false" />
                    <img className="image" src="./5.png" draggable="false" />
                    <img className="image" src="./6.png" draggable="false" />
                    <img className="image" src="./7.jpg" draggable="false" />
                    <img className="image" src="./8.JPG" draggable="false" />
                    <img className="image" src="./11.png" draggable="false" />
                    <img className="image" src="./19.png" draggable="false" />
                </div>
            </main>

        </div>
    )
}

export default Pics