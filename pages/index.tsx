import type { NextPage } from 'next'
import axios from 'axios'
import { Video } from '../types';

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`);
  return {
    props: {
      videos: response.data
    }
  }
}
export default Home
