import { FlatList, Text } from "react-native";
import React, { Component } from "react";
import { getNews } from "../news";
import BreakingScreen from "./breaking";

export default class BreakingNews extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => {
        this.setState({ articles, refreshing: false });
      
      })


      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
  
      return (
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <BreakingScreen article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
      );
    
  }
}
