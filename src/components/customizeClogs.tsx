import { useState } from 'react';

import SectionBackground from '../assets/images/SectionBackground.png';

// Clogs Beige
import BeigeClogsWithChestNutBrownStrap from '../assets/images/Clogs/Clogs Beige/BeigeClogsWithChestNutBrownStrap.png'
import BeigeClogsWithSandstoneBeigeStrap from '../assets/images/Clogs/Clogs Beige/BeigeClogsWithSandStoneBeigeStrap.png'
import BeigeClogsWithOnyxBlackStrap from '../assets/images/Clogs/Clogs Beige/BeigeClogsWithOnyxBlackStrap.png'
import BeigeClogsWithPearlWhiteStrap from '../assets/images/Clogs/Clogs Beige/BeigeClogsWithPearlWhiteStrap.png'

// Clogs Monochrome Gray
import MonochromeGrayClogsWithChestNutBrownStrap from '../assets/images/Clogs/Clogs Monochrome Gray/MonochromeGrayClogsWithChestNutBrownStrap.png'
import MonochromeGrayClogsWithSandstoneBeigeStrap from '../assets/images/Clogs/Clogs Monochrome Gray/MonochromeGrayClogsWithSandstoneBeigeStrap.png'
import MonochromeGrayClogsWithOnyxBlackStrap from '../assets/images/Clogs/Clogs Monochrome Gray/MonochromeGrayClogsWithOnyxBlackStrap.png'
import MonochromeGrayClogsWithPearlWhiteStrap from '../assets/images/Clogs/Clogs Monochrome Gray/MonochromeGrayClogsWithPearlWhiteStrap.png'

// Clogs Obsidian Black
import ObsidianBlackClogsWithChestNutBrownStrap from '../assets/images/Clogs/Clogs Obsidian Black/ObsidianBlackClogsWithChestnutBrownStrap.png'
import ObsidianBlackClogsWithSandstoneBeigeStrap from '../assets/images/Clogs/Clogs Obsidian Black/ObsidianBlackClogsWithSandstoneBeigeStrap.png'
import ObsidianBlackClogsWithOnyxBlackStrap from '../assets/images/Clogs/Clogs Obsidian Black/ObsidianBlackClogsWithOnyxBlackStrap.png'
import ObsidianBlackClogsWithPearlWhiteStrap from '../assets/images/Clogs/Clogs Obsidian Black/ObsidianBlackClogsWithPearlWhiteStrap.png'

// Straps
import ChesnutBrownStrap from '../assets/images/Straps/ChesnutBrown-Strap.png'
import SandstoneBeigeStrap from '../assets/images/Straps/SandstoneBeige-Strap.png'
import OnyxBlackStrap from '../assets/images/Straps/OnyxBlack-Strap.png'
import PearlWhiteStrap from '../assets/images/Straps/PearlWhite-Strap.png'


const CustomizeClogs = () => {
    const [selectedColor, setSelectedColor] = useState('beige');
    const [selectedStrap, setSelectedStrap] = useState('chesnut');

    const getActiveClogImage = () => {
        if (selectedColor === 'beige') {
            switch (selectedStrap) {
                case 'chesnut': return BeigeClogsWithChestNutBrownStrap;
                case 'sandstone': return BeigeClogsWithSandstoneBeigeStrap;
                case 'onyx': return BeigeClogsWithOnyxBlackStrap;
                case 'pearl': return BeigeClogsWithPearlWhiteStrap;
            }
        } else if (selectedColor === 'gray') {
            switch (selectedStrap) {
                case 'chesnut': return MonochromeGrayClogsWithChestNutBrownStrap;
                case 'sandstone': return MonochromeGrayClogsWithSandstoneBeigeStrap;
                case 'onyx': return MonochromeGrayClogsWithOnyxBlackStrap;
                case 'pearl': return MonochromeGrayClogsWithPearlWhiteStrap;
            }
        } else if (selectedColor === 'black') {
            switch (selectedStrap) {
                case 'chesnut': return ObsidianBlackClogsWithChestNutBrownStrap;
                case 'sandstone': return ObsidianBlackClogsWithSandstoneBeigeStrap;
                case 'onyx': return ObsidianBlackClogsWithOnyxBlackStrap;
                case 'pearl': return ObsidianBlackClogsWithPearlWhiteStrap;
            }
        }
        return BeigeClogsWithChestNutBrownStrap; // default image
    };

    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <main style={{ 
                    backgroundImage: `url(${SectionBackground})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '500px'
                }} className="w-full rounded-lg shadow-lg p-8 md:p-12 lg:p-16">
                    <div className="flex justify-center items-center h-[400px] md:h-[500px]">
                        <img
                            src={getActiveClogImage()}
                            alt="Customized Clog"
                            className="object-contain max-h-full w-auto max-w-[280px] sm:max-w-[350px] md:max-w-full"
                        />
                    </div>

                    <div className='flex justify-center items-center flex-wrap gap-8 '>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-center text-[#313131]">Select Clog Color</h2>
                            <div className="flex justify-center gap-8 p-4 rounded-full border border-black shadow-md">
                                <button
                                    onClick={() => setSelectedColor('beige')}
                                    className={'w-14 h-14 rounded-full bg-[#EADBC5] border-2 ' + (selectedColor === 'beige' ? '#000000' : 'border-transparent') + ' transition-all '}
                                    aria-label="Beige color"
                                />

                                <button
                                    onClick={() => setSelectedColor('gray')}
                                    className={'w-14 h-14 rounded-full bg-[#D9D9D9] border-2 ' + (selectedColor === 'gray' ? '#000000' : 'border-transparent') + ' transition-all'}
                                    aria-label="Gray color"
                                />
                                <button
                                    onClick={() => setSelectedColor('black')}
                                    className={'w-14 h-14 rounded-full bg-[#2B2B2B] border-2 ' + (selectedColor === 'black' ? '#000000' : 'border-transparent') + ' transition-all'}
                                    aria-label="Black color"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-center text-[#313131]">Select Strap Color</h2>
                            <div className="flex justify-center items-center py-2 px-10 rounded-full border border-black shadow-md">
                                <button
                                    onClick={() => setSelectedStrap('chesnut')}
                                    className={'relative p-1 border-b-4 ' + (selectedStrap === 'chesnut' ? 'border-black ' : 'border-transparent')}
                                >
                                    <img src={ChesnutBrownStrap} alt="Chesnut Brown Strap" className="w-12 h-auto object-cover" />
                                </button>
                                <button
                                    onClick={() => setSelectedStrap('sandstone')}
                                    className={'relative p-1 border-b-4 ' + (selectedStrap === 'sandstone' ? 'border-black' : 'border-transparent')}
                                >
                                    <img src={SandstoneBeigeStrap} alt="Sandstone Beige Strap" className="w-12 h-auto object-cover" />
                                </button>
                                <button
                                    onClick={() => setSelectedStrap('onyx')}
                                    className={'relative p-1 border-b-4 ' + (selectedStrap === 'onyx' ? 'border-black' : 'border-transparent')}
                                >
                                    <img src={OnyxBlackStrap} alt="Onyx Black Strap" className="w-12 h-auto" />
                                </button>
                                <button
                                    onClick={() => setSelectedStrap('pearl')}
                                    className={'relative p-1 border-b-4 ' + (selectedStrap === 'pearl' ? 'border-black' : 'border-transparent')}
                                >
                                    <img src={PearlWhiteStrap} alt="Pearl White Strap" className="w-12 h-auto object-cover" />
                                </button>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </section>
    );
};

export default CustomizeClogs;