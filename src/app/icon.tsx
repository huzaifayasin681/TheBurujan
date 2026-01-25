import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    // Use a reliable fallback if file read fails (though it shouldn't locally)
    try {
        const filePath = join(process.cwd(), 'public/images/logo_nb.png');
        const logoData = readFileSync(filePath);
        const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

        return new ImageResponse(
            (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                    }}
                >
                    {/* 
             Invert filter turns black pixels to white. 
             If the logo is colored, it might look weird, but for monochrome black it works perfectly.
          */}
                    <img
                        src={logoSrc}
                        width="32"
                        height="32"
                        style={{
                            objectFit: 'contain',
                            filter: 'invert(1)'
                        }}
                    />
                </div>
            ),
            {
                ...size,
            }
        );
    } catch (e) {
        // Fallback to a simple white "B" if file reading fails
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 24,
                        background: 'transparent',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                >
                    B
                </div>
            ),
            {
                ...size,
            }
        );
    }
}
