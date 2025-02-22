import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack sx={{
        height: 'calc(100vh - 70px)',
        width: '100vw',
      }}>

      </Stack>

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
