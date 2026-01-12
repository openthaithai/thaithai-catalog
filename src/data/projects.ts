import openssoImg from '@/assets/images/local/opensso.png';
import careImg from '@/assets/images/local/care.png';
import ssoPortfolioImg from '@/assets/images/local/sso-portfolio.png';
import simssoImg from '@/assets/images/local/simsso.png';
import ssoboardImg from '@/assets/images/local/ssoboard.png';
import seagamesImg from '@/assets/images/local/seagames2025.png';
import parliamentHackImg from '@/assets/images/local/parliamenthack.png';
import bombGamblingImg from '@/assets/images/local/bomb-gambling.png';

import defaultImg from '@/assets/images/default.png'

export interface Project {
  id: string;
  title: string;
  description: string;
  websiteUrl?: string;
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
    githubUrl: 'https://github.com/openthaithai/open-sso',
    tags: ['SSO', 'Authentication', 'Open Source'],
    status: 'live',
    imageUrl: openssoImg,
  },
  {
    id: '2',
    title: 'คำนวณค่าบำนาญสูตร CARE',
    description: 'CARE Pension Calculator is an online tool for Thai Social Security members to estimate their old-age pension under the new CARE (Career-Average Revalued Earnings) formula.',
    websiteUrl: 'https://sso.thaith.ai/care',
    githubUrl: 'https://github.com/openthaithai/sso-care',
    tags: ['Pension', 'Calculator', 'SSO'],
    status: 'live',
    imageUrl: careImg,
  },
  {
    id: '3',
    title: 'SSO Portfolio',
    description: 'What does the Social Security Fund invest its money in on the Thai stock market?',
    websiteUrl: 'https://sso.thaith.ai/portfolio',
    githubUrl: 'https://github.com/openthaithai/sso-portfolio',
    tags: ['Portfolio', 'SSO', 'Projects'],
    status: 'live',
    imageUrl: ssoPortfolioImg,
  },
  {
    id: '4',
    title: 'SSO Simulation',
    description: 'An interactive simulator for exploring scenarios and outcomes in Thailand’s Social Security system.',
    websiteUrl: 'https://sso.thaith.ai/simsso',
    githubUrl: 'https://github.com/openthaithai/sso-simulation',
    tags: ['Simulation', 'Testing', 'SSO'],
    status: 'live',
    imageUrl: simssoImg,
  },
  {
    id: '5',
    title: 'SSO Board',
    description: 'ผ่านมากี่ปี เก้าอี้ก็ยังเป็นของคนเดิมส่ องข้อมูลตำแหน่งเดิมที่ยาวนาน... จนกลายเป็นตำนานองค์กร',
    websiteUrl: 'https://sso.thaith.ai/ssoboard',
    githubUrl: 'https://github.com/openthaithai/sso-board',
    tags: ['Dashboard', 'Data', 'SSO'],
    status: 'live',
    imageUrl: ssoboardImg,
  },
  {
    id: '6',
    title: 'SEA Games 2025 Schedule',
    description: 'Official schedule and information for the 2025 SEA Games.',
    websiteUrl: 'https://open.thaith.ai/seagame2025',
    githubUrl: 'https://github.com/openthaithai/seagames2025-schedule',
    tags: ['Sports', 'Schedule', 'SEA Games'],
    status: 'live',
    imageUrl: seagamesImg,
  },
  {
    id: '7',
    title: '#ParliamentHack',
    description: 'Information and resources for the Parliament Hackathon event.',
    websiteUrl: 'https://open.thaith.ai/parliamenthack',
    githubUrl: 'https://github.com/openthaithai/parliamenthack',
    tags: ['Hackathon', 'Open Data', 'Civic Tech'],
    status: 'live',
    imageUrl: parliamentHackImg,
  },
  {
    id: '8',
    title: 'Bomb Gambling',
    description: 'Interactive web app raising awareness about gambling risks through simulations and narratives.',
    websiteUrl: 'https://open.thaith.ai/bomb-gambling/',
    githubUrl: '',
    tags: ['Gambling Awareness', 'Reporting', 'Data'],
    status: 'live',
    imageUrl: bombGamblingImg,
  },
  {
    id: '9',
    title: 'Thai Constitutional Notes',
    description: 'โปรเจคสำหรับรวบรวม จัดระเบียบ และเผยแพร่ข้อมูล "บันทึกคำต่อคำการประชุมคณะกรรมการร่างรัฐธรรมนูญ 2560" เพื่อส่งเสริมความโปร่งใสและช่วยให้การตีความเจตนารมณ์ของรัฐธรรมนูญทำได้ง่ายขึ้นโดยใช้เทคโนโลยีข้อมูล',
    websiteUrl: '',
    githubUrl: 'https://github.com/openthaithai/thai-constitutional-notes',
    tags: ['Open Source', 'Data'],
    status: 'live',
    imageUrl: defaultImg,
  }
];
