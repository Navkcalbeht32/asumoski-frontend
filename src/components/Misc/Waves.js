
const Waves = () => {
    return (
        <section>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink={"http://www.w3.org/1999/xlink"} viewBox={"0 24 150 28"} preserveAspectRatio='none' shape-rendering={"auto"}>
            <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
            <g class="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(64, 151, 252, 0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(130, 88, 210, 0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(143,36,236,0.2)" />
                <use xlinkHref="#gentle-wave" x="48" y="6" fill="rgba(3,36,236,0.4)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
            </svg>
        </section>
       
    )
}

export default Waves