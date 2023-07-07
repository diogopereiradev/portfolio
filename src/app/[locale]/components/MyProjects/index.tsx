import './styles.css';
import React from 'react';

function ProjectCard(): JSX.Element {
  return (
    <div className='dynamic-project-card relative flex w-full flex-row items-center justify-between py-[30px] pt-[50px]'>
      <div className='relative duration-150 before:absolute before:left-0 before:top-0 2xl:before:h-[370px] xl:before:h-[270px] before:w-full before:rounded-[5px] before:bg-primary-500 before:opacity-[0.6] before:duration-150 hover:before:opacity-[0] before:z-[1]'>
        <img className='2xl:h-[370px] 2xl:min-w-[580px] xl:min-w-[350px] xl:h-[270px] rounded-[5px] object-cover' src='https://source.unsplash.com/random/500x400' />
      </div>
      <div className='absolute flex flex-col z-[2]'>
        <p className='text-[14px] text-secondary-100'>Nome do projeto</p>
        <h2 className='text-[28px] text-white-200'>Flowers Theme</h2>
        <div className='mt-[20px] min-h-[120px] w-[450px] rounded-[5px] bg-secondary-200 p-[20px]'>
          <p className='text-[15px] font-[400] text-white-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit orci, malesuada et augue nec, eleifend faucibus augue. Nam et quam diam. Aliquam erat volutpat. Vivamus sit amet lacus accumsan</p>
        </div>
        <div className='mt-[20px] flex gap-[10px]'>
          <div className='flex h-[30px] w-[100px] items-center gap-[10px] rounded-[5px] bg-secondary-200 px-[10px]'>
            <div className='mt-[1px] h-[8px] w-[8px] rounded-full bg-[#fff000]'></div>
            <p className='text-[13px] font-[500] text-secondary-100'>Pornhub</p>
          </div>
          <div className='flex h-[30px] w-[100px] items-center gap-[10px] rounded-[5px] bg-secondary-200 px-[10px]'>
            <div className='mt-[1px] h-[8px] w-[8px] rounded-full bg-[#fff000]'></div>
            <p className='text-[13px] font-[500] text-secondary-100'>Pornhub</p>
          </div>
          <div className='flex h-[30px] w-[100px] items-center gap-[10px] rounded-[5px] bg-secondary-200 px-[10px]'>
            <div className='mt-[1px] h-[8px] w-[8px] rounded-full bg-[#fff000]'></div>
            <p className='text-[13px] font-[500] text-secondary-100'>Pornhub</p>
          </div>
          <div className='flex h-[30px] w-[100px] items-center gap-[10px] rounded-[5px] bg-secondary-200 px-[10px]'>
            <div className='mt-[1px] h-[8px] w-[8px] rounded-full bg-[#fff000]'></div>
            <p className='text-[13px] font-[500] text-secondary-100'>Pornhub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MyProjects(): JSX.Element {
  return (
    <section className='flex justify-center pt-[50px] pb-[120px]'>
      <div className='w-[1300px] px-[180px] flex flex-col gap-[30px]'>
        <div className="flex items-center gap-[20px]">
          <h2 className="whitespace-nowrap text-[30px] text-white-100">Projetos</h2>
          <hr className="relative h-[2px] w-full max-w-[300px] rounded-full bg-primary-500" />
        </div>
        <ProjectCard />
      </div>
    </section>
  );
}