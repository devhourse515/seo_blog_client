const CounterAbout = () => {
  return (
    <section className="section-couter">
      <div className="container">
        <div className="main lg:py-20 sm:py-14 py-10 border-t border-outline">
          <div className="flex max-md:flex-col gap-y-6">
            <div className="md:w-1/2 pr-[45px]">
              <h4 className="heading4">Our mission</h4>
              <div className="body2 mt-3">We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.</div>
              <div className="body2 mt-3">We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.</div>
            </div>
            <div className="md:w-1/2 md:pl-[45px]">
              <h4 className="heading4">Our Vision</h4>
              <div className="body2 mt-3">In our vision, innovation is not just a buzzword; it's a way of life. We aim to continuously push the boundaries of what's possible in the digital world. Through cutting-edge technologies, creative strategies, and forward-thinking solutions, we'll redefine industry standards and help our clients stay ahead of the curve.</div>
              <div className="body2 mt-3">In the digital age, talent and creativity are invaluable assets. We envision ByteWare as a hub for nurturing and attracting the brightest minds in the industry.</div>
            </div>
          </div>
          <div className="counter grid md:grid-cols-4 grid-cols-2 gap-y-6 lg:mt-[60px] sm:mt-12 mt-8">
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">20</div>
              <div className="body1 mt-1">Years experiences</div>
            </div>
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="flex items-center">
                <div className="count-number heading3">1.8</div>
                <span className="heading3">k</span>
              </div>
              <div className="body1 mt-1">Happy customers</div>
            </div>
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">460</div>
              <div className="body1 mt-1">Project completed</div>
            </div>
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">15</div>
              <div className="body1 mt-1">Awards achievement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CounterAbout