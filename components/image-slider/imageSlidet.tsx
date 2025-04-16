/* eslint-disable prettier/prettier */
"use client"

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// Removed incorrect import of setTimeout

export function CustomCarousel({ children }: { children: React.ReactNode }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState<number | null>(null);

    useEffect(() => {
        if (slideDone) {
            setSlideDone(false);
            setTimeID(
                window.setTimeout(() => {
                    slideNext();
                    setSlideDone(true);
                }, 5000)
            );
        }
    }, [slideDone]);

    const slideNext = () => {
        setActiveIndex((val) => {
            if (Array.isArray(children) && val >= children.length - 1) {
                return 0;
            } else {
                return val + 1;
            }
        });
    };

    const slidePrev = () => {
        setActiveIndex((val) => {
            if (Array.isArray(children) && val <= 0) {
                return children.length - 1;
            } else {
                return val - 1;
            }
        });
    };

    const AutoPlayStop = () => {
        if (timeID !== null && timeID > 0) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };

    const AutoPlayStart = () => {
        if (!slideDone) {
            setSlideDone(true);
        }
    };

    return (
        <div
            className="container__slider"
            onMouseEnter={AutoPlayStop}
            onMouseLeave={AutoPlayStart}
        >
            {children && Array.isArray(children) && children.map((item, index) => {
                return (
                    <div
                        className={"slider__item slider__item-active-" + (activeIndex + 1)}
                        key={index}
                    >
                        {item}
                    </div>
                );
            })}

            <div className="container__slider__links">
                {React.Children.toArray(children).map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={
                                activeIndex === index
                                    ? "container__slider__links-small container__slider__links-small-active"
                                    : "container__slider__links-small"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveIndex(index);
                            }}
                        ></button>
                    );
                })}
            </div>

            <button
                className="slider__btn-next"
                onClick={(e) => {
                    e.preventDefault();
                    slideNext();
                }}
            >
                <FontAwesomeIcon className="hover:bg-slate-900 hover:bg-opacity-20 hover:rounded-xl p-2" icon={faChevronRight} />
            </button>
            <button
                className="slider__btn-prev"
                onClick={(e) => {
                    e.preventDefault();
                    slidePrev();
                }}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        </div>
    );
}

export default CustomCarousel;
