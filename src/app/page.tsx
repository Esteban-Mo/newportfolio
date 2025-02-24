import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <div style={{
        height: 'calc(100vh - 70px)',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div style={{
          color: '#fff',
          fontSize: '2rem',
          fontWeight: '500',
          letterSpacing: '0.2em'
        }}>
          ESTEBAN MORTIER
        </div>
        <div style={{
          width: '150px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #fff, transparent)',
          margin: '0.5rem 0'
        }} />
        <div style={{
          color: '#60A5FA',
          fontSize: '2.5rem',
          fontWeight: '700',
          letterSpacing: '0.1em',
          textAlign: 'center'
        }}>
          EXPERT EN INGÉNIERIE LOGICIELLE
        </div>
      </div>

      <Stack sx={{
        height: 'calc(100vh - 70px)',
        width: '100vw',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>

      </Stack>
    </>
  );
}
