import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section style={{
            width: '100%',
            minWidth: '320px',
            height: '648px',
            background: 'linear-gradient(90deg, rgba(37,99,235,1) 1.75%, rgba(79,179,255,1) 103.23%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1200px',
                flexWrap: 'wrap'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '19px',
                    maxWidth: '600px',
                    flex: '1 1 300px'
                }}>
                    <h1 style={{
                        fontSize: '44px',
                        fontWeight: 700,
                        color: '#fff',
                        fontFamily: 'Poppins, sans-serif',
                        margin: 0
                    }}>
                        Studying Online is now much easier
                    </h1>
                    <p style={{
                        fontSize: '20px',
                        color: '#fff',
                        fontFamily: 'Poppins, sans-serif',
                        margin: 0
                    }}>
                        LearnEase is an interesting platform that will teach you in more an interactive way
                    </p>
                    <button
                        style={{
                            backgroundColor: '#ebad25',
                            color: '#fff',
                            padding: '8px 16px',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontFamily: 'Poppins, sans-serif',
                            cursor: 'pointer',
                            width: 'fit-content',
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#d99f20'
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#ebad25'
                        }}
                    >
                        Let's start
                    </button>
                </div>
                <div style={{
                    width: '100%',
                    maxWidth: '835px',
                    height: 'auto',
                    flex: '1 1 300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img
                        src="https://dashboard.codeparrot.ai/api/image/Z7ASwI9nxTWt8i4C/online-l.png"
                        alt="Online Learning"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

