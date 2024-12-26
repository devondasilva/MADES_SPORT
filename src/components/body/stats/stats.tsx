import './stats.css';

export default function Stats() {
    return (
        <>
            <div className="flex justify-center py-5 ">
                <div className="w-full max-w-[1200px]">
                    <div className="flex flex-col md:flex-row items-center text-center gap-8 md:gap-0">
                        {/* Stat 1 */}
                        <div className="stat flex-1">
                            <a href="#" className="text-[#136c95]">
                                <span className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Lexend2' }}>50+</span>
                                <br />
                                <span className="text-lg">Pays du Monde</span>
                            </a>
                        </div>
                        {/* Stat 2 */}
                        <div className="stat flex-1">
                            <a href="#" className="text-[#136c95]">
                                <span className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Lexend2' }}>15+</span>
                                <br />
                                <span className="text-lg">Coach placés</span>
                            </a>
                        </div>
                        {/* Stat 3 */}
                        <div className="stat flex-1">
                            <a href="#" className="text-[#136c95]">
                                <span className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Lexend2' }}>12+</span>
                                <br />
                                <span className="text-lg">Années d'expériences</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
