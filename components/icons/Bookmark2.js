import * as React from "react";

function SvgBookmark2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" {...props}>
      <path
        fill="url(#bookmark2_svg__pattern0)"
        fillOpacity={0.4}
        d="M0 0h15v15H0z"
      />
      <defs>
        <pattern
          id="bookmark2_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#bookmark2_svg__image0" transform="scale(.00195)" />
        </pattern>
        <image
          id="bookmark2_svg__image0"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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AgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAA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"
        />
      </defs>
    </svg>
  );
}

export default SvgBookmark2;
