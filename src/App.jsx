import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import InfoBox from "./components/InfoBox";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

const theme = {
  light: {
    primaryBackground: '#F6F8FF',
    containersBackground: '#FEFEFE',
    devfinder: '#222731',
    moon: '#697C9A',
    commonTextAndIcons: '#4B6A9B',
    username: '#2B3442',
    boldText: '#2B3442',
  },
  dark: {
    primaryBackground: '#141D2F',
    containersBackground: '#1E2A47',
    devfinder: '#FFFFFF',
    moon: '#FFFFFF',
    commonTextAndIcons: '#FFFFFF',
    username: '#FFFFFF',
    boldText: '#FFFFFF',
  },
}

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState('');

  const themeToggler = function () {
    setDarkTheme(prev => !prev);
  }

  const inputHandler = function (e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    setError(false);
    setIsLoading(true);

    const autoFetch = async function () {
      try {
        const response = await fetch('https://api.github.com/users/octocat');
        if (!response.ok) { throw new Error('Ops! user not found') };

        const data = await response.json();
        setFetchedData(data);

      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }

      setIsLoading(false);
    }

    autoFetch();

  }, []);

  const fetchHandler = async function (e) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      if (!response.ok) { throw new Error('Ops! user not found') };

      const data = await response.json();
      setFetchedData(data);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
    setIsLoading(false);
  }

  return (
    <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
      <Wrapper>
        <Header darkTheme={darkTheme} themeToggler={themeToggler} />
        <SearchBox error={error} inputHandler={inputHandler} fetchHandler={fetchHandler} />
        <InfoBox error={error} isLoading={isLoading} fetchedData={fetchedData} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
