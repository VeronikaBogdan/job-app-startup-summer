import { MantineProvider, Text, Title } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Title order={2}>Welcome to Mantine!</Title>
    </MantineProvider>
  );
}
