import profile from '../../assets/images/profile.png'


const Header = () => {
    return (
        <header className='flex w-4/5 mx-auto py-5 justify-between items-center border-b-2 '>
            <h1 className= "text-3xl font-bold">Knowledge Cafe</h1>
            <img src={profile} className='w-[50px] h-[50px] '/>
        </header>
    );
};

export default Header;