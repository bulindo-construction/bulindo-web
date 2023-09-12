import { StaticJumbotron } from "@/app/components/carousel";
import profilHighlight from "@/public/jumbotron/Jumbo-1.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center z-0">
      <StaticJumbotron imgSource={profilHighlight} className={"h-[45vh]"}>
        <h1 className="">Profil Perusahaan</h1>
      </StaticJumbotron>
      <div className="w-full py-16 bg-secondary-1-light">
        <div className="lockup px-10 xl:px-0 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
          lacus viverra vitae congue eu. Facilisis magna etiam tempor orci eu
          lobortis elementum nibh tellus. Metus dictum at tempor commodo
          ullamcorper a lacus vestibulum sed. Ultrices sagittis orci a
          scelerisque. Accumsan lacus vel facilisis volutpat. Aliquam sem et
          tortor consequat id porta. Malesuada bibendum arcu vitae elementum
          curabitur vitae. Augue eget arcu dictum varius duis at. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet risus. Mauris pharetra
          et ultrices neque ornare aenean euismod elementum nisi.
          <br />
          Morbi leo urna molestie at elementum eu facilisis. Erat velit
          scelerisque in dictum non consectetur a. Sed id semper risus in
          hendrerit gravida. Mauris pellentesque pulvinar pellentesque habitant.
          Velit egestas dui id ornare arcu odio ut sem nulla. Sit amet tellus
          cras adipiscing enim eu turpis egestas pretium. Nam at lectus urna
          duis. Enim ut tellus elementum sagittis vitae et. At in tellus integer
          feugiat scelerisque varius morbi enim. Risus sed vulputate odio ut
          enim blandit volutpat maecenas volutpat. Diam maecenas sed enim ut
          sem.
          <br />
          <br />
          Elementum nibh tellus molestie nunc non blandit. Semper eget duis at
          tellus at urna condimentum. Lorem dolor sed viverra ipsum nunc aliquet
          bibendum enim facilisis. Ornare lectus sit amet est placerat in.
          Convallis tellus id interdum velit laoreet. Diam maecenas sed enim ut.
          Nullam ac tortor vitae purus faucibus. Faucibus pulvinar elementum
          integer enim neque volutpat ac tincidunt vitae. Odio morbi quis
          commodo odio aenean sed. Sodales ut eu sem integer vitae justo.
          Pulvinar elementum integer enim neque volutpat ac tincidunt. Interdum
          velit euismod in pellentesque massa placerat duis. Condimentum lacinia
          quis vel eros donec ac odio tempor. Malesuada bibendum arcu vitae
          elementum curabitur vitae. Mauris in aliquam sem fringilla ut morbi
          tincidunt augue. Sed viverra tellus in hac habitasse platea dictumst.
          Venenatis urna cursus eget nunc.
          <br />
          In hac habitasse platea dictumst vestibulum. Arcu dui vivamus arcu
          felis bibendum ut tristique et egestas. Porta lorem mollis aliquam ut
          porttitor leo a diam. Eu scelerisque felis imperdiet proin fermentum
          leo vel orci. Porttitor leo a diam sollicitudin tempor id eu nisl
          nunc. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
          Sagittis purus sit amet volutpat consequat mauris nunc congue nisi.
          Ullamcorper malesuada proin libero nunc consequat interdum varius.
          Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Id
          volutpat lacus laoreet non
        </div>
      </div>
    </main>
  );
}
