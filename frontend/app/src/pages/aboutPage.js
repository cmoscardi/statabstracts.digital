function AboutPage() {
  return (
    <>
      <div className="App-bg d-flex w-100 justify-content-start pt-5 px-5">
        <div className="w-100 display-2 text-center">Christian Moscardi</div>
        <div className="w-100 text-center container-max-lg mb-3">
          Who is Christian Moscardi? Is he a creepy guy living a Victorian era
          lifestyle in 2024? Well if you ask Chat GPT, it would seem so.
        </div>
        <div className="px-md-5 px-xs-1 text-start">
          <p>
            Christian is a man of peculiar habits, whose very presence seems to
            cast a shadow over the room, as though he exists just beyond the
            realm of ordinary men. With a lean frame and an inscrutable
            expression, he is often seen traversing the rugged terrain of cycle
            cross, his iron-wheeled steed cutting through the muck and mire as
            if some spectral force were guiding him. His pace is relentless, his
            focus unyielding, and the grim determination in his eyes makes one
            wonder what he is fleeing from—or perhaps, what he is chasing.
          </p>

          <p>
            By day, Christian works for the Census, though it is said that he is
            not so much an agent of information, but rather a collector of
            secrets. No corner of the land, no whisper of the populace, escapes
            his keen attention. Some believe that in his meticulous records, one
            might find not only statistics but also a strange index of power, of
            influence—names that seem to matter more than they should, data that
            shifts uneasily beneath the surface of society.
          </p>

          <p>
            In the quiet hours of the evening, when the world is hushed and the
            air thick with the scent of damp earth, Christian retreats into the
            pages of "The Power Broker" by Robert Moses. The book, with its tales
            of control and manipulation, seems to mirror the very essence of his
            own existence—soaked in ambition and cold calculation. One cannot
            help but wonder if Christian, like Moses, harbors designs upon a
            power as vast as it is unseen, a power woven into the very fabric of
            the world, waiting only for the right moment to unfurl its dark
            wings.
          </p>
        </div>
        <div className="m-3">
          To learn more about this project check out Christian's blog post:{" "}
          <br />
          <a
            href="https://www.christianmoscardi.com/blog/2024/10/03/digitizing-us-statistical-abstracts.html"
            target="blank"
          >
            Fine-tuning OCR works really well: the Statistical Abstracts of the
            United States
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
