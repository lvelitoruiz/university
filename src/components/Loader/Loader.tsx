import React from 'react'

type Iloader = {
    open: boolean,
    dimention: string,
    min: string
}

export const Loader = ({open,dimention,min}: Iloader) => {
    return (
        <>
            {
                (open) && 
                <div className='absolute bg-black bg-opacity-70 w-full h-full flex items-center justify-center top-0 left-0' style={{'zIndex': 9999, 'minHeight': min+'px'}}>
                    <div className={`w-${dimention} h-${dimention}`}>
                        {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 100 100" enable-background="new 0 0 100 100">
                            <rect fill="#fff" width="3" height="100" transform="translate(0) rotate(180 3 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite" />
                            </rect>
                            <rect x="17" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 20 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                    begin="0.1s" />
                            </rect>
                            <rect x="40" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 40 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                    begin="0.3s" />
                            </rect>
                            <rect x="60" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 58 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                    begin="0.5s" />
                            </rect>
                            <rect x="80" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 76 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                    begin="0.1s" />
                            </rect>
                        </svg> */}
                        <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 100 100" enable-background="new 0 0 0 0">
                                <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                <animateTransform 
                                    attributeName="transform" 
                                    attributeType="XML" 
                                    type="rotate"
                                    dur="1s" 
                                    from="0 50 50"
                                    to="360 50 50" 
                                    repeatCount="indefinite" />
                            </path>
                        </svg>
                    </div>
                </div>
            }
        </>
    )
}
