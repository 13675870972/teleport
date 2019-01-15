import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import './../../assets/icomoon/style.css';
import {colors} from 'shared/components/theme';

function makeFontIcon(name, iconClassName) {
  const className = `icon ${iconClassName}`;
  const Icon = styled.span.attrs({className: className})`
    color: ${colors.light};
    display: inline-block;
    transition: color .3s;
    ${space} ${width} ${color} ${fontSize}
  `

  Icon.displayName = `Icon.${name}`;

  return Icon;
}


export const AddUsers = makeFontIcon('AddUsers', 'icon-users-plus');
export const Amex = makeFontIcon('Amex', 'icon-cc-amex');
export const Apartment = makeFontIcon('Apartment', 'icon-apartment');
export const Apple = makeFontIcon('Apple', 'icon-apple');
export const Archive = makeFontIcon('Archive', 'icon-archive2');
export const ArrowDown = makeFontIcon('ArrowDown', 'icon-chevron-down');
export const ArrowLeft = makeFontIcon('ArrowLeft', 'icon-chevron-left');
export const ArrowRight = makeFontIcon('ArrowRight', 'icon-chevron-right');
export const ArrowsVertical = makeFontIcon('ArrowsVertical', 'icon-chevrons-expand-vertical');
export const ArrowUp = makeFontIcon('ArrowUp', 'icon-chevron-up');
export const BitBucket = makeFontIcon('Bitbucket', 'icon-bitbucket');
export const Bubble = makeFontIcon('Bubble', 'icon-bubble');
export const Calendar = makeFontIcon('Calendar', 'icon-calendar-empty');
export const Camera = makeFontIcon('Camera', 'icon-camera');
export const CardView = makeFontIcon('CardView', 'icon-th-large');
export const CardViewSmall = makeFontIcon('CardViewSmall', 'icon-th');
export const CaretLeft = makeFontIcon('CaretLeft', 'icon-caret-left');
export const CaretRight = makeFontIcon('CaretRight', 'icon-caret-right');
export const CarrotDown = makeFontIcon('CarrotDown', 'icon-caret-down');
export const CarrotLeft = makeFontIcon('CarrotLeft', 'icon-caret-left');
export const CarrotRight = makeFontIcon('CarrotRight', 'icon-caret-right');
export const CarrotSort = makeFontIcon('CarrotSort', 'icon-sort');
export const CarrotUp = makeFontIcon('CarrotUp', 'icon-caret-up');
export const Cash = makeFontIcon('Cash', 'icon-cash-dollar');
export const CircleArrowLeft = makeFontIcon('CircleArrowLeft', 'icon-arrow-left-circle');
export const CircleArrowRight = makeFontIcon('CircleArrowRight', 'icon-arrow-right-circle');
export const ChevronCircleUp = makeFontIcon('ChevronCircleUp', 'icon-chevron-up-circle');
export const ChevronCircleDown = makeFontIcon('ChevronCircleDown', 'icon-chevron-down-circle');
export const ChevronCircleLeft = makeFontIcon('ChevronCircleLeft', 'icon-chevron-left-circle');
export const ChevronCircleRight = makeFontIcon('ChevronCircleRight', 'icon-chevron-right-circle');
export const CircleCheck = makeFontIcon('CircleCheck', 'icon-checkmark-circle');
export const CircleCross = makeFontIcon('CircleCross', 'icon-cross-circle');
export const CirclePause = makeFontIcon('CirclePause', 'icon-pause-circle');
export const CirclePlay = makeFontIcon('CirclePlay', 'icon-play-circle');
export const CircleStop = makeFontIcon('CircleStop', 'icon-stop-circle');
export const Cli = makeFontIcon('Cli', 'icon-cli');
export const Clipboard = makeFontIcon('Clipboard', 'icon-clipboard-text');
export const ClipboardUser = makeFontIcon('ClipboardUser', 'icon-clipboard-user');
export const Cloud = makeFontIcon('Cloud', 'icon-cloud');
export const Cluster = makeFontIcon('Cluster', 'icon-site-map');
export const Code = makeFontIcon('Code', 'icon-code');
export const Cog = makeFontIcon('Cog', 'icon-cog');
export const Contract = makeFontIcon('Contract', 'icon-frame-contract');
export const CreditCard = makeFontIcon('CreditCard', 'icon-credit-card1');
export const CreditCardAlt = makeFontIcon('CreditCardAlt', 'icon-credit-card-alt');
export const CreditCardAlt2 = makeFontIcon('CreditCardAlt2', 'icon-credit-card');
export const Cross = makeFontIcon('Cross', 'icon-cross');
export const Database = makeFontIcon('Database', 'icon-database');
export const Discover = makeFontIcon('Discover', 'icon-cc-discover');
export const Earth = makeFontIcon('Earth', 'icon-earth');
export const Edit = makeFontIcon('Edit', 'icon-pencil4');
export const Ellipsis = makeFontIcon('Ellipsis', 'icon-ellipsis');
export const Expand = makeFontIcon('Expand', 'icon-frame-expand');
export const Facebook = makeFontIcon('Facebook', 'icon-facebook');
export const FacebookSquare = makeFontIcon('FacebookSquare', 'icon-facebook2');
export const Github = makeFontIcon('Github', 'icon-github');
export const Google = makeFontIcon('Google', 'icon-google-plus');
export const Graph = makeFontIcon('Graph', 'icon-graph');
export const Home = makeFontIcon('Home', 'icon-home3');
export const Label = makeFontIcon('Label', 'icon-label');
export const Lan = makeFontIcon('Lan', 'icon-lan');
export const LanAlt = makeFontIcon('LanAlt', 'icon-lan2');
export const Layers = makeFontIcon('Layers', 'icon-layers');
export const License = makeFontIcon('License', 'icon-license2');
export const Link = makeFontIcon('Link', 'icon-link');
export const Linkedin = makeFontIcon('Linkedin', 'icon-linkedin');
export const Linux = makeFontIcon('Linux', 'icon-linux');
export const ListBullet = makeFontIcon('ListBullet', 'icon-list4');
export const ListCheck = makeFontIcon('ListCheck', 'icon-list3');
export const ListView = makeFontIcon('ListView', 'icon-th-list');
export const Lock = makeFontIcon('Lock', 'icon-lock');
export const Magnifier = makeFontIcon('Magnifier', 'icon-magnifier');
export const MapMarker = makeFontIcon('MapMarker', 'icon-map-marker');
export const MasterCard = makeFontIcon('MasterCard', 'icon-cc-mastercard');
export const Mute = makeFontIcon('Mute', 'icon-mute');
export const OpenID = makeFontIcon('OpenID', 'icon-openid');
export const Paypal = makeFontIcon('Paypal', 'icon-cc-paypal');
export const Pencil = makeFontIcon('Pencil', 'icon-pencil');
export const Phone = makeFontIcon('Phone', 'icon-telephone');
export const Planet = makeFontIcon('Planet', 'icon-planet');
export const Play = makeFontIcon('Play', 'icon-play');
export const Power = makeFontIcon('Power', 'icon-power');
export const Profile = makeFontIcon('Profile', 'icon-profile');
export const Server = makeFontIcon('Server', 'icon-server');
export const Shart = makeFontIcon('Shart', 'icon-chart-bars');
export const ShieldCheck = makeFontIcon('ShieldCheck', 'icon-shield-check');
export const Signal = makeFontIcon('Signal', 'icon-signal');
export const SmartPhone = makeFontIcon('SmartPhone', 'icon-smartphone-embed');
export const Sort = makeFontIcon('Sort', 'icon-chevrons-expand-vertical');
export const SortAsc = makeFontIcon('SortAsc', 'icon-chevron-up');
export const SortDesc = makeFontIcon('SortDesc', 'icon-chevron-down');
export const Speed = makeFontIcon('Speed', 'icon-speed-fast');
export const Spinner = makeFontIcon('Spinner', 'icon-spinner8');
export const Stripe = makeFontIcon('Stripe', 'icon-cc-stripe');
export const Tablet = makeFontIcon('Tablet', 'icon-tablet2');
export const Trash = makeFontIcon('Trash', 'icon-trash2');
export const Twitter = makeFontIcon('Twitter', 'icon-twitter');
export const Unlock = makeFontIcon('Unlock', 'icon-unlock');
export const User = makeFontIcon('User', 'icon-user');
export const Users = makeFontIcon('Users', 'icon-users2');
export const Visa = makeFontIcon('Visa', 'icon-cc-visa');
export const VolumeUp = makeFontIcon('VolumeUp', 'icon-volume-high');
export const Wifi = makeFontIcon('Wifi', 'icon-wifi');
export const Window = makeFontIcon('Window', 'icon-window');
export const Windows = makeFontIcon('Windows', 'icon-windows');
export const Youtube = makeFontIcon('Youtube', 'icon-youtube');