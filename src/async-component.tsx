import React from 'react';

const asyncComponent = (loadComponent: any) =>
  class AsyncComponent extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        Component: null,
      };
    }

    public componentWillMount() {
      if (this.hasLoadedComponent()) {
        return;
      }

      loadComponent()
        .then((module: any) => module.default)
        .then((Component: any) => {
          this.setState({ Component });
        })
        .catch((err: any) => {
          console.error(`Cannot load component in <AsyncComponent />`);
          throw err;
        });
    }

    public hasLoadedComponent() {
      return this.state.Component != null;
    }

    public render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };

export default asyncComponent;
