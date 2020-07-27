import * as React from 'react';
import {FormattedMessage, useIntl, injectIntl} from 'react-intl';

class PasswordChangeWithIntl extends React.Component {
  render() {
    const {intl} = this.props;
    return (
      <li>
        <input
          placeholder={intl.formatMessage({
            defaultMessage: 'New Password',
            description: 'placeholder text',
          })}
        />
        <input
          placeholder={intl.formatMessage({
            id: 'explicit-id',
            defaultMessage: 'Confirm Password',
            description: 'placeholder text',
          })}
        />
      </li>
    );
  }
}

const PasswordChange = injectIntl(PasswordChangeWithIntl);

export function List(props) {
  const intl = useIntl();
  return (
    <section>
      <header>
        <FormattedMessage
          defaultMessage="Control Panel"
          description="title of control panel section"
        />
      </header>
      <ul>
        <li>
          <button>
            <FormattedMessage
              defaultMessage="Delete user {name}"
              description="Delete button"
              values={{
                name: props.name,
              }}
            />
          </button>
        </li>
        <PasswordChange />
      </ul>
    </section>
  );
}
