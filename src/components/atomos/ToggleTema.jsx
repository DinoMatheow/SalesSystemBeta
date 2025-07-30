import React from 'react';
import styled from 'styled-components';
import { useThemeStore } from '../../store/ThemeStore';

export function ToggleTema() {
  const { setTheme } = useThemeStore();

  return (
    <ToggleButton onClick={setTheme}>
      🌙
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.bgAlpha};
  }
`; 