<p align="center">
	<img src="https://atlan.com/assets/img/atlan-blue.6ed81a56.svg" width="200" align="center">
</p>
<h1 align="center">Demo SQL querier</h1>

<p align="center">A Daily driver for data analysts.</p>

<h3 align="center">
	<a href="https://atlan-task-nu.vercel.app/#/">Live URL (Vercel)</a>
</h3>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#faqs">FAQs</a></li>
        <li><a href="#built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#tools">Tools and Libraries</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

## About The Project

SQL query performer for data analysts

### Features

- Toggle recent searches.
- Filters and sorting in result table.
- Peek feature for analyzing raw result data.
- Copy to clipboard feature for query and result data
- Download result data
- Pagination feature for result data.

### FAQs

- Question: The page load time of your application, and how you measured this time?
- Answer - Used chrome's lighthouse for generating these metrics
- First contentful paint - 0.3s
- Time to interactive - 0.5s
- Speed index - 0.4s
- Total blocking time - 0ms
- Largest contentful paint - 0.7s
- Cumulative layout shift - 0
- [image for ref](https://drive.google.com/file/d/1u8U4-xq5rFX1_hk-FFd7JRRZa7oATvPO/view?usp=sharing)

- Question: Any optimisations you did to decrease the load time or increase performance?
- Answer: using code spliting was most helpful in minimising the chunk sizes, making more chunks but smaller in size

### Built With

- React
- Redux, react-redux, react-router
- Ant Design
- SASS

## Getting Started

Following are the simple steps to run this project.

### Prerequisites

- npm

```
  npm install npm@latest -g
```

### Installation

1. Clone the repo

```
  git clone https://github.com/saxenaa218/atlan-task atlan-task
```

2. Install NPM packages

```
  cd atlan-task && npm install
```

3. Run

```
  npm start
```

4. Open http://localhost:3000 to view it in the browser

## Tools and Libraries

- [redux] - State Management
- [antd] - Component Library
- [react-router-dom] - Routing
- [gh-pages] - Github pages deployment

## Contributors

Abhishek Saxena - [GitHub](https://github.com/saxenaa218)
