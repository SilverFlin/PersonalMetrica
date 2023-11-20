

export default function createView(nodeParent: HTMLElement): HTMLElement {


    const trackerView = document.createElement('div');
    trackerView.id = 'mytrackers';
    trackerView.classList.add('my-trackers');
    nodeParent.appendChild(trackerView);

    return trackerView;



}