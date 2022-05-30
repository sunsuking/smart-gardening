import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import { getFlowersList, getMyStatus } from '../components/api';

interface StatusResponse {
  temperature: number;
  humidity: number;
  co2: number;
}

const Home: NextPage = () => {
  const { data, isLoading } = useQuery<StatusResponse>('status', () => getMyStatus(), { refetchInterval: 1000 * 60 * 5 });
  const text = '비가 올 예정입니다. \n' + '창문을 닫아주세요.';

  if (isLoading) {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <span className="text-5xl">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col overflow-y-hidden">
      <span className="text-2xl flex justify-center my-16">{text}</span>
      <span className="w-full text-8xl flex justify-center items-baseline mt-16 mb-5">
        {data?.temperature}
        <span className="text-4xl font-light">°C</span>
      </span>
      <div className="flex flex-row w-3/5 m-auto h-12 justify-evenly items-center gap-4 text-gray-900">
        <div className="flex flex-row text-3xl font-light gap-4">
          <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.7543 6.56758C19.2984 4.88702 17.6633 3.37043 15.8782 2.04475C15.7189 1.93484 15.5299 1.87598 15.3364 1.87598C15.1428 1.87598 14.9539 1.93484 14.7946 2.04475C13.0094 3.37043 11.3744 4.88702 9.9184 6.56758C6.67939 10.2777 4.97155 14.1999 4.97155 17.8982C4.97155 20.6471 6.06356 23.2835 8.00734 25.2272C9.95112 27.171 12.5875 28.263 15.3364 28.263C18.0853 28.263 20.7216 27.171 22.6654 25.2272C24.6092 23.2835 25.7012 20.6471 25.7012 17.8982C25.7012 14.1999 23.9934 10.2777 20.7543 6.56758ZM21.8379 19.0054C21.6095 20.3518 20.9673 21.5937 20.0005 22.5583C19.0337 23.523 17.7905 24.1625 16.4435 24.388H16.2904C16.053 24.3892 15.8239 24.3007 15.6489 24.1402C15.4739 23.9798 15.366 23.7592 15.3466 23.5225C15.3273 23.2859 15.398 23.0507 15.5446 22.864C15.6911 22.6772 15.9028 22.5527 16.1373 22.5153C17.0973 22.3545 17.9833 21.8982 18.6716 21.2099C19.3599 20.5216 19.8163 19.6356 19.977 18.6756C19.9983 18.5532 20.0436 18.4363 20.1103 18.3315C20.1769 18.2267 20.2637 18.1361 20.3655 18.065C20.4673 17.9938 20.5821 17.9435 20.7034 17.9169C20.8248 17.8903 20.9501 17.888 21.0724 17.91C21.1954 17.9298 21.3133 17.9742 21.4189 18.0404C21.5244 18.1066 21.6157 18.1934 21.6871 18.2956C21.7585 18.3978 21.8086 18.5132 21.8345 18.6352C21.8605 18.7571 21.8616 18.883 21.8379 19.0054Z"
              fill="#868686"
            />
          </svg>
          <span>
            {data?.humidity}
            <span className="font-thin text-sm">%</span>
          </span>
        </div>
        <div className="w-[4px] h-full bg-gray-600 rounded-lg" />
        <div className="flex flex-row text-3xl gap-4">
          <svg
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect opacity="0.5" x="0.0837097" y="0.922363" width="36.6134" height="36.6134" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_19_234" transform="scale(0.00195312)" />
              </pattern>
              <image
                id="image0_19_234"
                width="512"
                height="512"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <span className="font-light text-3xl">
            {data?.co2}
            <span className="font-thin text-sm">ppm</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;