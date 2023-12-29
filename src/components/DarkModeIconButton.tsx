import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

function DarkModeIconButton({
  'aria-label': ariaLabel,
  ...rest
}: React.ComponentPropsWithoutRef<typeof IconButton>) {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={isDark ? <MoonIcon /> : <SunIcon />}
      aria-label={ariaLabel || 'dark-mode-toggle'}
      {...rest}
    />
  );
}

export default DarkModeIconButton;
