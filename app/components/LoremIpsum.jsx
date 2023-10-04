import React from "react";
import { range } from "@/utils/range";

export default function LoremIpsum({ className, length = 1 }) {
  return (
    <>
      <article className={className}>
        {/* This adds X lorem ipsum paragraphs, where X = length */}
        {range(length).map((num) => (
          <React.Fragment key={num}>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac rhoncus quam.
            </p>
            <p className="mb-3">
              Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
              imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
              Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut
              felis blandit, at iaculis odio ultrices. Nulla facilisi.
              Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a.
            </p>
            <h2 className="text-purple-700 font-semibold text-2xl mt-6 mb-4">
              Sub-header
            </h2>
            <p className="mb-3">
              In eget sodales arcu, consectetur efficitur metus. Duis efficitur
              tincidunt odio, sit amet laoreet massa fringilla eu.
            </p>
            <p className="mb-3">
              Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
              Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
              arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </p>
            <p className="mb-3">
              Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
            </p>
            <p className="mb-3">
              Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
              pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
              suscipit leo.
            </p>
          </React.Fragment>
        ))}
      </article>
    </>
  );
}
