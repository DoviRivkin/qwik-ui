import { component$, Slot, useSignal, useStore, useStyles$ } from '@builder.io/qwik';
import { Tab, TabList, TabPanel, Tabs } from '@qwik-ui/headless';
import { PreviewCodeExample } from '../../../_components/preview-code-example/preview-code-example';
import styles from './index.css?inline';

export const Example01 = component$(() => {
  useStyles$(styles);

  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example">
        <h3>Danish Composers</h3>
        <Tabs behavior="automatic">
          <TabList>
            <Tab>Maria Ahlefeldt</Tab>
            <Tab>Carl Andersen</Tab>
            <Tab>Ida Henriette da Fonseca</Tab>
          </TabList>
          <TabPanel>
            <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) was a ...</p>
          </TabPanel>
        </Tabs>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const VerticalTabsExample = component$(() => {
  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example mr-auto">
        <h3>Danish Composers</h3>

        <Tabs vertical class="flex flex-wrap gap-5">
          <TabList class="flex flex-col w-fit">
            <Tab>Maria Ahlefeldt</Tab>
            <Tab>Carl Andersen</Tab>
            <Tab>Ida Henriette da Fonseca</Tab>
          </TabList>
          <TabPanel>
            <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) was a ...</p>
          </TabPanel>
        </Tabs>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const DisabledTabsExample = component$(() => {
  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example mr-auto w-full">
        <h3>Dad jokes</h3>
        <Tabs>
          <TabList>
            <Tab
              class="aria-disabled:cursor-not-allowed"
              style="width: 25%"
              disabled={true}
            >
              Disabled Tab
            </Tab>
            <Tab style="width: 25%">Joke 2</Tab>
            <Tab style="width: 25%">Joke 3</Tab>
            <Tab style="width: 25%">Joke 4</Tab>
          </TabList>
          <TabPanel>"What did the coffee report to the police", " A mugging."</TabPanel>
          <TabPanel>"What's brown and sticky", " A stick."</TabPanel>
          <TabPanel>"How do the trees get on the internet?", "They log on."</TabPanel>
          <TabPanel>"What did the fish say when he hit the wall", " Dam."</TabPanel>
        </Tabs>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const AutomaticBehaviorTabsExample = component$(() => {
  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example mr-auto">
        <h3>Danish Composers</h3>
        <h4 class="text-white">(Hover over the tabs)</h4>
        <Tabs behavior="automatic">
          <TabList>
            <Tab>Maria Ahlefeldt</Tab>
            <Tab>Carl Andersen</Tab>
            <Tab>Ida Henriette da Fonseca</Tab>
          </TabList>
          <TabPanel>
            <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) was a ...</p>
          </TabPanel>
        </Tabs>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const ManualBehaviorTabsExample = component$(() => {
  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example mr-auto">
        <Tabs behavior="manual">
          <h3>Danish Composers</h3>
          <h4>(Hover over the tabs - they should not be selected)</h4>
          <TabList>
            <Tab>Maria Ahlefeldt</Tab>
            <Tab>Carl Andersen</Tab>
            <Tab>Ida Henriette da Fonseca</Tab>
          </TabList>
          <TabPanel>
            <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) was a ...</p>
          </TabPanel>
        </Tabs>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const DynamicTabsExample = component$(() => {
  const tabsState = useStore(['Dynamic Tab 1', 'Dynamic Tab 2', 'Dynamic Tab 3']);

  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example mr-auto">
        <Tabs>
          <TabList>
            {tabsState.map((tab) => (
              <Tab key={tab}>{tab}</Tab>
            ))}
          </TabList>
          {tabsState.map((tab) => (
            <TabPanel key={tab}>{tab} Panel</TabPanel>
          ))}
        </Tabs>

        <button
          class="mt-4 text-red-600 font-bold"
          onClick$={() => {
            if (tabsState.length > 1) {
              tabsState.splice(0, 1);
            }
          }}
        >
          Remove First Tab
        </button>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const OnSelectedIndexChangeTabsExample = component$(() => {
  const selectedIndexSig = useSignal(0);

  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example mr-auto">
        <Tabs
          onSelectedIndexChange$={(index: number) => {
            selectedIndexSig.value = index;
          }}
        >
          <h3>Danish Composers</h3>
          <TabList>
            <Tab>Maria Ahlefeldt</Tab>
            <Tab>Carl Andersen</Tab>
            <Tab>Ida Henriette da Fonseca</Tab>
          </TabList>
          <TabPanel>
            <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) was a ...</p>
          </TabPanel>
        </Tabs>

        <p class="text-white mt-4">Selected Index: {selectedIndexSig.value}</p>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const SelectedTabIdExample = component$(() => {
  const selectedTabIdSig = useSignal<string | undefined>();

  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example mr-auto">
        <Tabs bind:selectedTabId={selectedTabIdSig}>
          <h3>Danish Composers</h3>
          <TabList>
            <Tab tabId="Maria">Maria Ahlefeldt</Tab>
            <Tab tabId="Carl">Carl Andersen</Tab>
            <Tab tabId="Ida">Ida Henriette da Fonseca</Tab>
          </TabList>
          <TabPanel>
            <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) was a ...</p>
          </TabPanel>
        </Tabs>
        <p class="text-white mt-4">
          <strong>Selected Tab Id</strong>: {selectedTabIdSig.value}
        </p>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const OnClickTabsExample = component$(() => {
  const tabsClickedCountSig = useSignal(0);

  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example mr-auto">
        <h3>Danish Composers</h3>
        <h4 class="text-white mt-4">(watch the counter below)</h4>
        <Tabs
          onClick$={() => {
            tabsClickedCountSig.value++;
          }}
        >
          <TabList>
            <Tab>Maria Ahlefeldt</Tab>
            <Tab>Carl Andersen</Tab>
            <Tab>Ida Henriette da Fonseca</Tab>
          </TabList>
          <TabPanel>
            <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) was a ...</p>
          </TabPanel>
        </Tabs>

        <p class="text-white mt-4">Click count: {tabsClickedCountSig.value}</p>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const SelectedPropExample = component$(() => {
  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent" class="tabs-example mr-auto">
        <h3>Danish Composers</h3>

        <Tabs>
          <TabList>
            <Tab>Maria Ahlefeldt</Tab>
            <Tab selected>Carl Andersen</Tab>
            <Tab>Ida Henriette da Fonseca</Tab>
          </TabList>
          <TabPanel>
            <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) was a ...</p>
          </TabPanel>
          <TabPanel>
            <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) was a ...</p>
          </TabPanel>
        </Tabs>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});
