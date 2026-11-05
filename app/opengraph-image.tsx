import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sudcan Painting - Professional Painters in Kitchener-Waterloo Ontario';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#35483A',
          backgroundImage: 'linear-gradient(135deg, #35483A 0%, #202321 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#F5F0E6',
              textAlign: 'center',
              marginBottom: 20,
              fontFamily: 'system-ui',
            }}
          >
            Sudcan Painting
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#C6A15B',
              textAlign: 'center',
              marginBottom: 40,
              fontFamily: 'system-ui',
            }}
          >
            Professional Painters in Kitchener-Waterloo
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#687967',
              textAlign: 'center',
              maxWidth: 900,
              fontFamily: 'system-ui',
            }}
          >
            Interior & Exterior Painting • Cabinet Refinishing • Home Renovation
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#F5F0E6',
              textAlign: 'center',
              marginTop: 40,
              padding: '20px 40px',
              backgroundColor: '#B52E32',
              borderRadius: 50,
              fontFamily: 'system-ui',
            }}
          >
            (226) 600-6637
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
