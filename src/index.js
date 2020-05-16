import React from "react";
import ReactDOM from "react-dom";
import Header from './component/header';
import Footer from './component/footer';

const Index = () => {
  return <div>
    <Header />
    Hello React!
    <Footer />
    </div>;
};

// import { ThemeContext, themes } from './component/theme-context';
// import ThemedButton from './component/themed-button';

// // An intermediate component that uses the ThemedButton
// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//     };

//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//   }

//   render() {
//     // The ThemedButton button inside the ThemeProvider
//     // uses the theme from state while the one outside uses
//     // the default dark theme
//     return (
//       <Page>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme} />
//         </ThemeContext.Provider>
//         <Section>
//           <ThemedButton />
//         </Section>
//       </Page>
//     );
//   }
// }

ReactDOM.render(<Index />, document.getElementById("index"));
