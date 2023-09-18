import * as React from "react";
import Header from '../component/Header'
import Sidebar from "../component/Sidebar";
import Todo from "../pages/Todo/Todo";
import { PageType } from "../util/types";

interface PageProps {}

interface PageState {
  currentPage: PageType;
}

class Page extends React.Component<PageProps, PageState> {

  constructor(props: PageProps) {
    super(props)
    this.state = { currentPage: PageType.HOME }
  }

  render() {
    return (
    <div id="container">
        <Sidebar />
        <Header title="Rohan's Personal Site" />
        <Todo />
    </div>
    )
  }
}

export default Page;
