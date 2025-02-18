import Head from "next/head";
import { NextPage } from "next";
import React from "react";

const StyleGuide: NextPage = () => (
    <div>
        <Head>
            <title>Style Guide | Technical Minecraft Wiki</title>
        </Head>
        <h1>Style Guide</h1>
        <p>
            This article aims to provide a comprehensive style guide for all
            Minecraft Wiki articles to follow. There are often disputes over
            which style rule or formatting to use so an official style guide
            helps resolve these disputes and reach a consensus. Although
            Wikipedia already provides a more general style guide, a more
            specific one is necessary for Minecraft-specific guidelines. As
            such, only guidelines pertaining to the Minecraft Wiki and its basic
            formatting rules are included here. If any contradiction arises,
            this page always has precedence over its subpages and the Wikipedia
            style guide.
        </p>
        <div className="border border-contrast-400 rounded-lg bg-[#f9fafB] dark:bg-[#333333] p-5 my-5 w-min whitespace-nowrap">
            <h4>Document Outline</h4>
            <ul className="ml-5">
                <li>
                    1&nbsp;
                    <a href="#notability" className="text-blue-500">
                        Notability
                    </a>
                    <ul className="ml-5">
                        <li>
                            1.1&nbsp;
                            <a href="#general" className="text-blue-500">
                                General
                            </a>
                        </li>
                        <li>
                            1.2&nbsp;
                            <a href="#community" className="text-blue-500">
                                Community
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    2&nbsp;
                    <a href="#article-titles" className="text-blue-500">
                        Article Titles
                    </a>
                </li>
                <li>
                    3&nbsp;
                    <a href="#writing" className="text-blue-500">
                        Writing
                    </a>
                    <ul className="ml-5">
                        <li>
                            3.1&nbsp;
                            <a
                                href="#keeping-articles-up-to-date"
                                className="text-blue-500"
                            >
                                Keeping articles up to date
                            </a>
                        </li>
                        <li>
                            3.2&nbsp;
                            <a
                                href="#keeping-articles-concise"
                                className="text-blue-500"
                            >
                                Keeping articles concise
                            </a>
                        </li>
                        <li>
                            3.3&nbsp;
                            <a href="#quotes" className="text-blue-500">
                                Quotes
                            </a>
                        </li>
                        <li>
                            3.4&nbsp;
                            <a href="#spelling" className="text-blue-500">
                                Spelling
                            </a>
                        </li>
                        <li>
                            3.5&nbsp;
                            <a href="#capitalization" className="text-blue-500">
                                Capitalization
                            </a>
                        </li>
                        <li>
                            3.6&nbsp;
                            <a
                                href="#section-headings"
                                className="text-blue-500"
                            >
                                Section Headings
                            </a>
                        </li>
                        <li>
                            3.6&nbsp;
                            <a href="#images" className="text-blue-500">
                                Images
                            </a>
                        </li>
                        <li>
                            3.7&nbsp;
                            <a href="#linking" className="text-blue-500">
                                Linking
                            </a>
                        </li>
                        <li>
                            3.8&nbsp;
                            <a
                                href="#guidelines-for-linking"
                                className="text-blue-500"
                            >
                                Guidelines for linking
                            </a>
                        </li>
                        <li>
                            3.9&nbsp;
                            <a
                                href="#date-formatting"
                                className="text-blue-500"
                            >
                                Date Formatting
                            </a>
                        </li>
                        <li>
                            3.10&nbsp;
                            <a href="#coordinates" className="text-blue-500">
                                Coordinates
                            </a>
                        </li>
                        <li>
                            3.11&nbsp;
                            <a href="#commands" className="text-blue-500">
                                Commands
                            </a>
                        </li>
                        <li>
                            3.12&nbsp;
                            <a href="#sources" className="text-blue-500">
                                Sources
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <h1 className="mt-7" id="notability">
            Notability
        </h1>
        <ul className="list-disc ml-7">
            <li>
                <h2 className="mt-3" id="general">
                    General
                </h2>
                <ol className="list-disc ml-7">
                    <li>
                        Articles are allowed in the main namespace only if they fit the
                        following criteria. Articles that do not fit the criteria may be
                        deleted or redirected without notice.
                    </li>
                    <li>
                        Articles must contain enough information to warrant a full
                        page. If they do not have enough content, they should be
                        merged with other similar articles.
                    </li>
                    <li>
                        Articles must pertain directly to <i>Technical Minecraft</i> in some
                        way.
                    </li>
                    <li>
                        Articles about people are allowed only if the person in
                        question is a developer of <i>Minecraft</i> and/or either a
                        part of or closely related to Mojang Studios.
                    </li>
                    <li>
                        Features that are not currently in the game should be
                        included only in the version's mentioned features article.
                        <ol className="list-disc ml-7">
                            <li>
                                This excludes features that have been removed or
                                features from development versions, which may be
                                noted on articles affected by the feature and the
                                relevant version article(s).
                            </li>
                        </ol>
                    </li>
                    <li>
                        Articles about versions of <i>Minecraft</i> may be created
                        for released editions, of which separate articles should be
                        created for each development version.
                        <ol className="list-disc ml-7">
                            <li>
                                Future version articles may be created, provided
                                there is a significant source of the unreleased
                                version's existence. Sources include development
                                versions or multiple sources of features for the
                                next update.
                            </li>
                            <li>
                                Future development version articles may
                                not be created.
                            </li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>
                <h2 className="mt-3" id="community">
                    Community
                </h2>
                <ol className="list-disc ml-7">
                    <li>
                        Gameplay strategies, guides, how-to's, etc., should be
                        subpages of guides.
                        <ol className="list-disc ml-7">
                            <li>
                                Pages containing a list of miscellaneous builds the
                                user can make are not to be considered a guide. They
                                are to be kept in the userspace. This includes
                                user-created activities and challenges. Builds pertaining to <i>Technical Minecraft</i> can be uploaded{" "}
                                <a
                                target="_self"
                                rel="nofollow"
                                className="text-blue-500"
                                href="https://tmc-archive.org/"
                            >
                                here
                            </a>.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Articles about client or server mods, or third-party
                        programs such as map editors, <i>are</i> allowed to be created
                        on the wiki.
                    </li>
                    <li>
                        Articles regarding custom servers <i>are</i> allowed but
                        must use the community tag.
                    </li>
                </ol>
            </li>
        </ul>

        <h1 className="mt-7" id="article-titles">
            Article Titles
        </h1>
        <ul className="list-disc ml-7">
            <li>
                Articles about blocks, items, and entities in-game should use
                the in game name capitalized as it appears in game.
                <ul className="list-disc ml-7">
                    <li>
                        If the feature does not have an in game name, it should
                        follow the same format as other articles of the same
                        type. For example, the mob Spider Jockey.
                    </li>
                    <li>
                        If the article is about multiple things in the game, the
                        title should equally represent all the titles. For
                        example, an article about wooden and iron doors would be
                        called Door.
                    </li>
                    <li>
                        If the feature has different names in <i>Java</i> and
                        Bedrock Edition, the <i>Java Edition</i> name should be
                        used.
                    </li>
                    <li>
                        If a feature has no display name in any edition, it
                        should follow the ID.
                        <ul className="list-disc ml-7">
                            <li>
                                If it has no display name in <i>Java</i> nor
                                Bedrock Edition, the <i>Java Edition</i> ID
                                should be the article name.
                            </li>
                            <li>
                                If it has no display name in either <i>Java</i>{" "}
                                or Bedrock Edition, the name in the edition that
                                does have the display name should be the article
                                name.
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                Articles about people should contain the first and last names,
                rather than their <i>Minecraft</i> or Twitter handle.
            </li>
            <li>
                Versions of Java Edition should be prefixed with Java Edition
                (e.g. Java Edition 1.8).
            </li>
        </ul>
        <h1 className="mt-7" id="writing">
            Writing
        </h1>
        <ul className="list-disc ml-7">
            <li>
                This wiki's purpose is to document facts. Therefore, always avoid personal commentary, speculation, and unsourced information.
            </li>
            &nbsp;
            <li>
                Articles in the main namespace should always be written in the
                third-person perspective and without terms referential to the reader
                ("you", "your", etc.). For instance, sentences like "You shouldn't come close to
                creepers because they'll explode and kill you." should be written as
                "A player can be killed by approaching a creeper close enough to
                cause it to explode."
            </li>
            <li>
                The <i>only</i> exception to this is tutorial pages,
                where in most cases "you" is the most appropriate pronoun to use
                when referring to the player.
            </li>
            <li>
                Try not to use abbreviations of words.
            </li>
            <li>
                To emphasize points, <i>italics</i> should be used, not <b>bold</b>{" "}or ALL CAPS.
            </li>
            <li>
                <h2 className="mt-3" id="keeping-articles-up-to-date">
                    Keeping articles up to date
                </h2>
                <ul className="list-disc ml-7">
                    <li>
                        Articles should contain only information that is up to
                        date, i.e., implemented in the latest <i>full</i> version of the
                        game.
                    </li>
                    <li>
                        Anything that is outdated should be moved to the History
                        section of the article.
                    </li>
                    <li>
                        When something changes, note the change in
                        the History section and remove the outdated information from other
                        sections of the article.
                    </li>
                    <li>
                        It is unnecessary to mention when a
                        particular feature was implemented; this is once again reserved for
                        the History section of the article.
                    </li>
                    <li>
                        As an example; sentences such as "Trading,
                        which was implemented in 1.3.1, is a feature that allows players to
                        exchange emeralds (previously rubies) for other items." should be
                        written as "Trading is a feature that allows players to exchange
                        emeralds for other items."
                    </li>
                </ul>
            </li>
            <li>
                <h2 className="mt-3" id="keeping-articles-concise">
                    Keeping articles concise
                </h2>

                <ul className="list-disc ml-7">
                    <li>
                        Tutorial and guide information should be present <i>only</i> in
                        guide articles.
                    </li>
                    <li>
                        If relevant guides may be linked from other articles.
                    </li>
                    <li>
                        <p className="mb-5">
                            Here's an example of how to not write a good article. It uses a
                            previous version of the Log article, which at the time was called
                            Wood. This is the full introduction. Highlighted in{" "}
                            <span className="bg-yellow-300 bg-opacity-50">yellow</span> is the
                            redundant information, and in{" "}
                            <span className="bg-pink-300 bg-opacity-50">pink</span> the history
                            information. These should not be included in an article.
                        </p>
                        <div className="border py-2 px-5">
                            <p>
                                <b>Wood</b>{" "}
                                <span className="bg-pink-300 bg-opacity-50">
                    (previously known as <b>log</b>)
                </span>{" "}
                                is a type of block{" "}
                                <span className="bg-pink-300 bg-opacity-50">
                    first seen in <i>Minecraft</i> 0.0.14a
                </span>
                                . They have a skin resembling bark on the four side faces, and a
                                crosscut face on top and bottom.{" "}
                                <span className="bg-pink-300 bg-opacity-50">
                    Only the normal oak logs are available in chunks generated
                    before the Beta 1.2 update and all previous versions, while
                    pine and birch generate in newer chunks
                </span>
                                . Wood is greatly abundant in naturally-generated maps, as it is
                                used as the foundation for trees. Wood can be chopped by hand,
                                but using an axe is faster. Wood is also flammable.
                            </p>
                            <p>
                                Of the{" "}
                                <span className="bg-yellow-300 bg-opacity-50">current</span>{" "}
                                wood types, birch is the rarest type.{" "}
                                <span className="bg-yellow-300 bg-opacity-50">
                    They are often used to make plants, trees and wooden cabins.
                </span>{" "}
                                <span className="bg-pink-300 bg-opacity-50">
                    In Survival Test, wood blocks drop 3–5 wooden planks when
                    mined. In Indev, Infdev, Alpha, and Beta, mining a wood
                    block drops a wood block instead
                </span>
                                .{" "}
                                <span>
                    This allows the use of wood as a building material and is
                    craftable into planks
                </span>
                                .
                            </p>
                            <p>
                <span className="bg-yellow-300 bg-opacity-50">
                    Wood's only crafting use is to be made into four wooden
                    planks
                </span>
                                . In addition, wood can be burnt in a furnace to make charcoal
                                as a substitute for coal.
                            </p>
                            <p>
                <span className="bg-pink-300 bg-opacity-50">
                    As of the Minecraft Beta 1.2 update on January 13, 2011,
                    there are now four kinds of wood
                </span>
                                .{" "}
                                <span className="bg-yellow-300 bg-opacity-50">
                    One is the normal wood (oak), another resembles the wood of
                    silver birch trees, yet another type resembles the normal
                    wood, but it is darker and appears in pine/conifer trees
                    that grow in colder biomes, the fourth type is similar to
                    the oak wood, however there are some color differences and
                    it is tilted to one side.
                </span>{" "}
                                Wood blocks produce 4 wooden planks when crafted. Wood from
                                different types of trees do not stack in the inventory.{" "}
                                <span className="bg-pink-300 bg-opacity-50">
                    Planks made from different kinds of trees used to be
                    completely identical
                </span>
                                . Birch trees have slightly duller colored leaves than regular
                                trees, pine trees have pine needles, and jungle leaves are leafy
                                with fruit looking shapes on them.
                            </p>
                            The fourth type of wood{" "}
                            <span className="bg-pink-300 bg-opacity-50">
                was introduced in snapshot 12w03a
            </span>
                            , solely occurring in jungle biomes, and comprising trees exclusive
                            to them. The tallest trees have this type of wood in 2x2 dimensions
                            instead of the normal 1x1.
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <h2 className="mt-3" id="quotes">
                    Quotes
                </h2>
                <ul className="list-disc ml-7">
                    <li>
                        All quotes must be copied verbatim.
                    </li>
                    <li>
                        Any additional content added within the quotation marks must be enclosed in square brackets.
                    </li>
                    <li>
                        Terminal punctuation must go inside the quote only if it is in the
                        original; otherwise, it must go outside.
                    </li>
                    <li>
                        If the quote contains an
                        error that was present in the original, add after that text to show
                        readers that it is not a transcription mistake.
                    </li>
                </ul>
            </li>
            <li>
                <h2 className="mt-3" id="capitalization">
                    Capitalization
                </h2>
                <ul className="list-disc ml-7">
                    <li>
                        In-game items should be treated as common nouns and as such should
                        not be capitalized, unless they start a new sentence or are in an article title.  This includes
                        fictional items, such as prismarine.
                    </li>
                    <li>
                        Proper nouns, however, such as the Nether or the Overworld should always be capitalized. In-game structures and biome names should not be
                        capitalized. As a rule of thumb if there is only one of a thing in a world then it is a proper noun and should be capitalized.
                    </li>
                    <li>
                        Examples: <i>Underground</i>, there are randomly generated{" "}
                        <i>mineshafts</i>. A <i>desert pyramid</i> contains some rare
                        loot. Blazes spawn in <i>nether fortresses</i>; a <i>Nether</i> structure. In deep ocean
                        biomes, <i>monuments</i> can generate. A<i>stronghold</i> is
                        home to an <i>end portal</i> that takes you to the <i>End</i>.
                    </li>
                </ul>
            </li>
            <li>
                <h2 className="mt-3" id="section-headings">
                    Section headings
                </h2>
                <ul className="list-disc ml-7">
                    <li>
                        Follow sentence style capitalization, not title style, so only the
                        first letter of the heading and proper nouns are capitalized.
                    </li>
                    <li>
                        Headings should not have links in them; links should be
                        placed underneath in the article.
                    </li>
                    <li>
                        Although not required, having one space between sections and one
                        space between the equal signs and the section name makes for ease of
                        editing.
                    </li>
                    <li>
                        Place any hatnotes and images immediately under the section heading,
                        and then a space after those before the section content.
                    </li>
                    <li>
                        Do not add blank sections.
                    </li>
                </ul>
            </li>
            <li>
                <h2 className="mt-3">Images</h2>
                <ul className="list-disc ml-7">
                    <li>
Screenshots that use custom texturepacks,
                        UI mods and other custom content are not allowed.
                    </li>
                    <li>
                            This does not apply to articles covering mods.
                    </li>
                    <li>
                        Articles should have one image showcasing an individual
                        attribute of the articles content. For example, a zombie wearing
                        armor.
                    </li>
                    <li>
                            Image captions should not have periods at the end, unless the caption
                        is a full sentence.
                    </li>
                    <li>
                        Images added to articles should fit the following guidelines:


                        <ul className="list-disc ml-7">
                            <li>
                                Images should relevant to the article's topic.
                            </li>
                            <li>
                                Images should not show unintended strange or humorous
                                behavior, such as mobs "sitting" on stairs.
                            </li>
                            <li>
                                Images should not have the sole purpose of showcasing a
                                bug, instead link to the bug on the{" "}
                                <a
                                    target="_self"
                                    rel="nofollow"
                                    className="text-blue-500"
                                    href="http://bugs.mojang.com"
                                >
                                    official bug tracker
                                </a>
                                .
                            </li>
                            <li>
                                Images showcasing usage of specific features as part of player builds should be avoided.
                            </li>

                            <li>
                                Images should showcase the most up to date version of Minecraft
                                available for the content. Images that are outdated should be removed or moved to the history section.
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <h2 className="mt-3" id="linking">
                    Linking
                </h2>
                <dl>
                    <dd>
                        <i>
                            For a complete guide to linking, please refer to Wikipedia's{" "}
                            <a
                                href="https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style_(linking)"
                                className="text-blue-500"
                                title="wp:Manual of Style (linking)"
                            >
                                Manual of Style for links
                            </a>
                            , although do note that some of the policies about linking
                            listed there are different than many here.
                        </i>
                    </dd>
                </dl>
                <ul className="list-disc ml-7">
                    <li>
                        Please note:
                    </li>
                    <ul className="list-disc ml-7">
                        <li>
                            The use of links is a difficult balance between providing readers
                            enough useful links to allow them to "wander through" articles and
                            excessive linking that can distract them from their reading flow.
                        </li>
                        <li>
                            Underlinking can cause the reader to become frustrated because
                            questions may arise about the article's contents, which can be
                            resolved only by using the search option or other sources for
                            clarification, interrupting and distracting the reader.
                        </li>
                        <li>
                            Overlinking may distract the reader because links are usually
                            colored differently causing the eye to shift focus constantly.
                            Additionally, if the same word is linked multiple times in the same
                            paragraph it can cause the reader to question if the links are
                            directing them to different articles or not.
                        </li>
                    </ul>
                    <li>
                            Guidelines for linking
                    </li>
                    <ul className="list-disc ml-7">
                        <li>
                            No more than 10 percent of the words in an article are contained
                            in links.
                        </li>
                        <li>
                            Unless it affects the sentence's wording and readability in a
                            negative way, two links should not be next to each other in a way so that it looks like one link.
                        </li>
                        <li>
                            Links for any single term should not be excessively repeated in
                            the same article. Excessive linking is defined as linking the
                            same term multiple times within a portion of text that can fit
                            on a typical viewer's screen.
                        </li>
                        <li>
                            Duplicating an important link distant from a previous occurrence
                            in an article may well be appropriate. If an important term
                            appears many times in a long article, but is linked only once at
                            the beginning of the article, it may actually be underlinked.
                            Indeed, readers who jump directly to a subsection of interest
                            must still be able to find a link. But take care in fixing such
                            problems, the distance between duplicate links is an editor's
                            preference; however, if in doubt, duplicate the term further
                            down the article.
                        </li>
                        <li>
                            Linking to a redirect is preferred over using a piped link except in
                            templates and other pages that are transcluded. When a piped link is
                            unavoidable, it should not point to a redirect. If a redirect can be
                            avoided using a suffix on the link, that is preferred. E.g. Using{" "}
                            <code>[[Creeper]]s</code> instead of <code>[[Creepers]]</code> is
                            desired.
                        </li>
                    </ul>
                </ul>
            </li>
            <li>
                <h2 className="mt-3" id="date-formatting">
                    Date Formatting
                </h2>
                <ul className="list-disc ml-7">
                    <li>
                        The Minecraft Wiki is an international community. That is a good
                        thing in general, but it makes a problem for numeric abbreviations
                        of dates, such as "12/10/11": while most countries abbreviate dates
                        as day/month/year, some Asian countries use year/month/day, and the
                        US uses month/day/year.  So the above date could represent any of
                        three different dates.
                    </li>
                    <li>
                        To avoid this problem, most dates should be
                        written in "Month&nbsp;DD, YYYY" format, <i>e.g.</i>{" "}
                        "December&nbsp;10, 2011".
                    </li>
                    <li>
                        Do not use superscripts or suffixes such
                        as "April 23<sup>rd</sup>" or "4th of May".
                    </li>
                    <li>
                        If a numeric or terse
                        date is needed (such as in a table), then use YYYY-MM-DD, always
                        with 2 digits for month and day (<i>e.g.</i>, 2011-12-10 or
                        2012-05-04). Besides being the{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/ISO_8601"
                            className="text-blue-500"
                            title="wikipedia:ISO 8601"
                        >
                            ISO standard
                        </a>
                        , dates in this format naturally sort properly, say if the table
                        column is later made sortable.
                    </li>
                    <li>
                        Try to avoid seasons for dates such as "Summer 2021" or "Fall 2022".
                        On Earth, the northern and southern hemispheres have opposite
                        seasons. Instead use phrases like "Mid-2021" or "Late 2022".
                    </li>
                </ul>
            </li>
            <li>
                <h2 className="mt-3" id="coordinates">
                    Coordinates
                </h2>
                <ul className="list-disc ml-7">
                    <li>
                        Single in-game coordinates should be capitalized and unspaced ("Y=1"
                        instead of "y=1" or "y = 1").
                    </li>
                    <li>
                        Volumes should be in the order X, Y,
                        Z, with each item separated by a multiplication sign ("×";{" "}
                        <code>&amp;times;</code>); "4×3×2" is an area that is 4 blocks wide
                        along the X axis, 3 along the Y axis (vertical), and 2 along the Z
                        axis.
                    </li>
                    <li>
                        Further coordinate usage is{" "}
                        <a
                            href="/wiki/Minecraft_Wiki_talk:Style_guide#Writing_coordinates"
                            title="Minecraft Wiki talk:Style guide"
                        >
                            under discussion
                        </a>
                        .
                    </li>
                </ul>
            </li>
            <li>
                <h2 className="mt-3" id="commands">
                    Commands
                </h2>
                <ul className="list-disc ml-7">
                    <li>
                        In-game commands should be in a specific format for ease of
                        understanding.
                    </li>
                    <li>
                        Literal keywords that must be typed in chat do not
                        have any brackets for formatting applied (e.g.,{" "}
                        <code>/data merge</code>). Variables must be inside angle brackets
                        and should be italic (e.g.,{" "}
                        <code>
                            &lt;<i>target</i>&gt;
                        </code>
                        ).
                    </li>
                    <li>
                        Optional content must be inside square brackets, but these
                        brackets should not replace any angle brackets (e.g.,{" "}
                        <code>
                            [&lt;<i>scale</i>&gt;]
                        </code>{" "}
                        is an optional variable whereas <code>[scale]</code> is an optional
                        keyword).
                    </li>
                    <li>
                        A list of valid keywords should be placed in parentheses
                        with each option separated by a pipe (e.g., <code>(eyes|feet)</code>
                        .
                    </li>
                    <li>
                        In the advancement command;{" "}
                        <code>
                            /advancement (grant|revoke) &lt;<i>targets</i>&gt; only &lt;
                            <i>advancement</i>&gt; [&lt;criterion&gt;]
                        </code>
                        , <code>/advancement</code> and <code>only</code> are literals to be
                        typed exactly as-is in chat, <code>(grant|revoke)</code> is a list
                        of choices for literal text where either <code>grant</code> or{" "}
                        <code>revoke</code> must be typed in chat,{" "}
                        <code>
                            &lt;<i>targets</i>&gt;
                        </code>{" "}
                        and{" "}
                        <code>
                            &lt;<i>advancement</i>&gt;
                        </code>{" "}
                        are required variables that must be replaced with valid values, and{" "}
                        <code>
                            [&lt;<i>criterion</i>&gt;]
                        </code>{" "}
                        is an optional variable that must be replaced with a valid value.
                    </li>
                </ul>
            </li>
            <li>
                <h2 className="mt-3" id="sources">
                    Sources
                </h2>
                <ul className="list-disc ml-7">
                    <li>
                        Information does not require sources if it can directly be seen in-game or are otherwise obvious.
                    </li>
                    <li>
                        Other information however, such as quotes from Mojang Studios employees or information that is not widely known, must be sourced with a proper reference.
                    </li>
                    <li>
                        Do <i>not</i> add content to an article without a proper source unless that content is obvious.
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);
export default StyleGuide;
