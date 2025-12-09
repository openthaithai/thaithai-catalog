import openssoImg from '@/assets/images/local/opensso.png';
import careImg from '@/assets/images/local/care.png';
import ssoPortfolioImg from '@/assets/images/local/sso-portfolio.png';
import simssoImg from '@/assets/images/local/simsso.png';
import ssoboardImg from '@/assets/images/local/ssoboard.png';
import seagamesImg from '@/assets/images/local/seagames2025.png';
import parliamentHackImg from '../assets/images/local/parliamenthack.png';
import bananaWebReportImg from '@/assets/images/local/bananawebreport.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  websiteUrl: string;
  githubUrl?: string; // Optional as not all might be public
  tags: string[];
  imageUrl?: string;
  status?: 'live' | 'wip' | 'archived';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'OPEN SSO',
    description: 'Social Security Office Administrative Fund for Fiscal Year 2025.',
    websiteUrl: 'https://sso.thaith.ai',
    tags: ['SSO', 'Authentication', 'Open Source'],
    status: 'live',
    imageUrl: openssoImg,
  },
  {
    id: '2',
    title: 'คำนวณค่าบำนาญสูตร CARE',
    description: 'CARE Pension Calculator is an online tool for Thai Social Security members to estimate their old-age pension under the new CARE (Career-Average Revalued Earnings) formula.',
    websiteUrl: 'https://sso.thaith.ai/care',
    tags: ['Pension', 'Calculator', 'SSO'],
    status: 'live',
    imageUrl: careImg,
  },
  {
    id: '3',
    title: 'SSO Portfolio',
    description: 'What does the Social Security Fund invest its money in on the Thai stock market?',
    websiteUrl: 'https://sso.thaith.ai/portfolio',
    tags: ['Portfolio', 'SSO', 'Projects'],
    status: 'live',
    imageUrl: ssoPortfolioImg,
  },
  {
    id: '4',
    title: 'SSO Simulation',
    description: 'An interactive simulator for exploring scenarios and outcomes in Thailand’s Social Security system.',
    websiteUrl: 'https://sso.thaith.ai/simsso',
    tags: ['Simulation', 'Testing', 'SSO'],
    status: 'live',
    imageUrl: simssoImg,
  },
  {
    id: '5',
    title: 'SSO Board',
    description: 'ผ่านมากี่ปี เก้าอี้ก็ยังเป็นของคนเดิมส่ องข้อมูลตำแหน่งเดิมที่ยาวนาน... จนกลายเป็นตำนานองค์กร',
    websiteUrl: 'https://sso.thaith.ai/ssoboard',
    tags: ['Dashboard', 'Data', 'SSO'],
    status: 'live',
    imageUrl: ssoboardImg,
  },
  {
    id: '6',
    title: 'SEA Games 2025 Schedule',
    description: 'Official schedule and information for the 2025 SEA Games.',
    websiteUrl: 'https://open.thaith.ai/seagame2025',
    tags: ['Sports', 'Schedule', 'SEA Games'],
    status: 'live',
    imageUrl: seagamesImg,
  },
  {
    id: '7',
    title: '#ParliamentHack',
    description: 'Information and resources for the Parliament Hackathon event.',
    websiteUrl: 'https://open.thaith.ai/parliamenthack',
    tags: ['Hackathon', 'Open Data', 'Civic Tech'],
    status: 'live',
    imageUrl: parliamentHackImg,
  },
  {
    id: '8',
    title: 'Civic Tech Reporting Platform',
    description: 'Civic Tech Reporting Platform',
    websiteUrl: 'https://open.thaith.ai/bananawebreport/',
    tags: ['Civic Tech', 'Reporting'],
    status: 'live',
    imageUrl: bananaWebReportImg,
  },
];
