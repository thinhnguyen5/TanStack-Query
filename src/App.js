import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./components/HomePage";
import SuperHeroesPage from "./components/SuperHeroesPage";
import RQSuperHeroPage from "./components/RQSuperHeroPage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ParallelQueriesPage from "./components/ParallelQueriesPage";
import DynamicParallelPage from "./components/DynamicParallelPage";
import DependentQueries from "./components/DependentQueries";
import PaginatedQueriesPage from "./components/PaginatedQueriesPage";
import InfiniteQueriesPage from "./components/InfiniteQueriesPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>

              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>

              <li>
                <Link to="/rq-paginated">Paginated</Link>
              </li>

              <li>
                <Link to="/rq-infinite">Infinite</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-paginated"
              element={<PaginatedQueriesPage />}
            ></Route>

            <Route
              path="/rq-infinite"
              element={<InfiniteQueriesPage />}
            ></Route>

            <Route
              path="/rq-dependent"
              element={<DependentQueries email="123@example.com" />}
            ></Route>

            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelPage heroIds={[1, 3]} />}
            />

            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />

            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            />

            <Route path="/super-heroes" element={<SuperHeroesPage />} />

            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />

            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
