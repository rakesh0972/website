import React, { useEffect, useRef } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";


const App = () => {
    const scrollbar = useRef < BaseScrollbar | null > (null);

    useEffect(() => {
        console.log(scrollbar.current);
    }, []);

    return (
        <div className="App">
            <h1>SMOOTH-SCROLLBAR-REACT</h1>

            <div
                className="sample-container"
                style={{ maxHeight: 250, display: "flex", backgroundColor: "red" }}
            >
                <Scrollbar
                    ref={scrollbar}
                    plugins={{
                        overscroll: {
                            effect: "bounce"
                        }
                    }}
                >
                    {[...Array(50).keys()].map((value, index) => (
                        <div key={index}>{value + index}</div>
                    ))}
                </Scrollbar>
            </div>

            <Scrollbar
                className="custom-class"
                onScroll={console.log}
                alwaysShowTracks
                plugins={{
                    overscroll: {
                        effect: "glow"
                    }
                }}
            >
                <div className="sample-container-2" style={{ maxHeight: 250 }}>
                    {[...Array(40).keys()].map((value, index) => (
                        <div key={index}>{value + index}</div>
                    ))}
                </div>
            </Scrollbar>
        </div>
    );
};

export default App;
