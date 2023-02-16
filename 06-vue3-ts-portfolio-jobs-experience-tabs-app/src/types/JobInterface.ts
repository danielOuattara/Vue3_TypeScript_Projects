interface JobInterface {
  id: string;
  order: number | string;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

export default JobInterface;
